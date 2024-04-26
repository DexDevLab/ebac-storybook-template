import { useEffect, useState } from "react";
import handler from "../../api/handler";
import PokemonCard from "./PokemonCard";
import "./pokemonCard.css";

export default {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "false",
      description:
        'ID do registro do dado salvo. O arquivo JSON que simula um banco de dados tem como índice 0 para o primeiro registro. Para mais informações, consultar "data.json"',
    },
    name: { control: "text", description: "Nome do Pokémon" },
    pid: {
      control: "number",
      description:
        "ID do Pokémon. Se trata do Número do Pokémon conforme registrado na Pokédex oficial. É importante que o número do Pokémon esteja correto para o carregamento adequado da imagem",
    },
    imageUrl: {
      control: "false",
      description:
        "URL da Imagem do Pokémon. O componente-pai (caller) fornecerá a lógica necessária para gerar o link da imagem. O componente carregará automaticamente, baseado no número do Pokémon.",
    },
    evolution: {
      control: "number",
      description:
        "Estágio de Evolução do Pokémon. Inicialmente o estágio de evolução é 1",
    },
    createPokemon: {
      control: "false",
      description:
        "Variável de Estado (state). Utilizada para definir se um Pokémon novo está sendo adicionado",
    },
    setCreatePokemon: {
      control: "false",
      description:
        "Função de Definição de Estado (setState). Utilizada para definir se um Pokémon está sendo adicionado",
    },
    updateList: {
      control: "false",
      description:
        "Variável de Estado (state). Utilizada para sinalizar um toggle para recarregamento da listagem de Pokémon",
    },
    setUpdateList: {
      control: "false",
      description:
        "Função de Definição de Estado (setState). Utilizada para sinalizar um toggle para recarregamento da listagem de Pokémon",
    },
    allowAddPokemon: {
      control: "false",
      description:
        "Permite que o componente se comporte tal qual o componente em produção ao adicionar um Pokémon novo. Utilizado apenas para testes visuais de componente",
    },
    allowEditPokemon: {
      control: "false",
      description:
        "Permite que o componente se comporte tal qual o componente em produção ao editar um Pokémon. Utilizado apenas para testes visuais de componente",
    },
    allowRemovePokemon: {
      control: "false",
      description:
        "Permite que o componente se comporte tal qual o componente em produção ao excluir um Pokémon. Utilizado apenas para testes visuais de componente",
    },
  },
};

export const Default = {
  render: () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [createPokemon, setCreatePokemon] = useState(false);
    const [updateList, setUpdateList] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
      setPokemonList([]);
      const request = async () => {
        const { status, data, error } = await handler("GET");
        if (error) {
          console.log(`HTTP code: ${status}, Error: ${error}`);
        } else {
          setPokemonList(data);
        }
      };
      setTimeout(request, 100);
    }, [updateList]);

    useEffect(() => {
      if (pokemonList.length > 0) {
        const getPid = [];
        switch (true) {
          case pokemonList[0].pid.toString().length === 1:
            getPid.push(`00${pokemonList[0].pid}`);
            break;
          case pokemonList[0].pid.toString().length === 2:
            getPid.push(`0${pokemonList[0].pid}`);
            break;
          default:
            getPid.push(`${pokemonList[0].pid}`);
            break;
        }
        setImageUrl(
          `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`
        );
      }
    }, [pokemonList]);

    return (
      <>
        {pokemonList.length > 0 && (
          <main>
            <div className="pokemon-container">
              <PokemonCard
                key={pokemonList[0]._id}
                id={pokemonList[0]._id}
                name={pokemonList[0].name}
                pid={pokemonList[0].pid}
                imageUrl={imageUrl}
                evolution={pokemonList[0].evolution}
                createPokemon={createPokemon}
                setCreatePokemon={setCreatePokemon}
                updateList={updateList}
                setUpdateList={setUpdateList}
              />
            </div>
          </main>
        )}
      </>
    );
  },
};

export const ListPokemon = {
  parameters: {
    controls: {
      exclude: [
        "id",
        "allowAddPokemon",
        "allowEditPokemon",
        "allowRemovePokemon",
        "createPokemon",
        "setCreatePokemon",
        "updateList",
        "setUpdateList",
        "imageUrl",
      ],
    },
  },
  args: {
    allowAddPokemon: false,
    allowEditPokemon: false,
    allowRemovePokemon: false,
  },
  render: ({ allowAddPokemon, allowEditPokemon, allowRemovePokemon }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [updateList, setUpdateList] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
      setPokemonList([]);
      const request = async () => {
        const { status, data, error } = await handler("GET");
        if (error) {
          console.log(`HTTP code: ${status}, Error: ${error}`);
        } else {
          setPokemonList(data);
        }
      };
      setTimeout(request, 100);
    }, [updateList]);

    useEffect(() => {
      if (pokemonList.length > 0) {
        const getPid = [];
        switch (true) {
          case pokemonList[0].pid.toString().length === 1:
            getPid.push(`00${pokemonList[0].pid}`);
            break;
          case pokemonList[0].pid.toString().length === 2:
            getPid.push(`0${pokemonList[0].pid}`);
            break;
          default:
            getPid.push(`${pokemonList[0].pid}`);
            break;
        }
        setImageUrl(
          `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`
        );
      }
    }, [pokemonList]);

    return (
      <>
        {pokemonList.length > 0 && (
          <main>
            <div className="pokemon-container">
              <PokemonCard
                key={pokemonList[0]._id}
                id={pokemonList[0]._id}
                name={pokemonList[0].name}
                pid={pokemonList[0].pid}
                imageUrl={imageUrl}
                evolution={pokemonList[0].evolution}
                allowAddPokemon={allowAddPokemon}
                allowEditPokemon={allowEditPokemon}
                allowRemovePokemon={allowRemovePokemon}
              />
            </div>
          </main>
        )}
      </>
    );
  },
};

export const AddPokemon = {
  parameters: {
    controls: {
      exclude: [
        "id",
        "allowAddPokemon",
        "allowEditPokemon",
        "allowRemovePokemon",
        "createPokemon",
        "setCreatePokemon",
        "updateList",
        "setUpdateList",
        "imageUrl",
      ],
    },
  },
  args: {
    createPokemon: true,
    allowAddPokemon: true,
    allowEditPokemon: false,
    allowRemovePokemon: false,
  },
  render: ({
    createPokemon,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [updateList, setUpdateList] = useState(0);
    useEffect(() => {
      setPokemonList([]);
      const request = async () => {
        const { status, data, error } = await handler("GET");
        if (error) {
          console.log(`HTTP code: ${status}, Error: ${error}`);
        } else {
          setPokemonList(data);
        }
      };
      setTimeout(request, 100);
    }, [updateList]);
    return (
      <>
        {pokemonList.length > 0 && (
          <main>
            <div className="pokemon-container">
              <PokemonCard
                name={pokemonList[pokemonList.length - 1].name}
                pid={pokemonList[pokemonList.length - 1].pid}
                evolution={pokemonList[pokemonList.length - 1].evolution}
                setUpdateList={setUpdateList}
                createPokemon={createPokemon}
                allowAddPokemon={allowAddPokemon}
                allowEditPokemon={allowEditPokemon}
                allowRemovePokemon={allowRemovePokemon}
              />
            </div>
          </main>
        )}
      </>
    );
  },
};

export const EditPokemon = {
  parameters: {
    controls: {
      exclude: [
        "id",
        "allowAddPokemon",
        "allowEditPokemon",
        "allowRemovePokemon",
        "createPokemon",
        "setCreatePokemon",
        "updateList",
        "setUpdateList",
        "imageUrl",
      ],
    },
  },
  args: {
    createPokemon: true,
    allowAddPokemon: false,
    allowEditPokemon: true,
    allowRemovePokemon: false,
  },
  render: ({
    createPokemon,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [updateList, setUpdateList] = useState(0);

    useEffect(() => {
      setPokemonList([]);
      const request = async () => {
        const { status, data, error } = await handler("GET");
        if (error) {
          console.log(`HTTP code: ${status}, Error: ${error}`);
        } else {
          setPokemonList(data);
        }
      };
      setTimeout(request, 100);
    }, [updateList]);
    return (
      <>
        {pokemonList.length > 0 && (
          <main>
            <div className="pokemon-container">
              <PokemonCard
                id={pokemonList[0]._id}
                name={pokemonList[0].name}
                pid={pokemonList[0].pid}
                evolution={pokemonList[0].evolution}
                createPokemon={createPokemon}
                allowAddPokemon={allowAddPokemon}
                allowEditPokemon={allowEditPokemon}
                allowRemovePokemon={allowRemovePokemon}
              />
            </div>
          </main>
        )}
      </>
    );
  },
};

export const RemovePokemon = {
  parameters: {
    controls: {
      exclude: [
        "id",
        "allowAddPokemon",
        "allowEditPokemon",
        "allowRemovePokemon",
        "createPokemon",
        "setCreatePokemon",
        "updateList",
        "setUpdateList",
        "imageUrl",
      ],
    },
  },
  args: {
    allowAddPokemon: false,
    allowEditPokemon: false,
    allowRemovePokemon: true,
  },
  render: ({ allowAddPokemon, allowEditPokemon, allowRemovePokemon }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [updateList, setUpdateList] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
      setPokemonList([]);
      const request = async () => {
        const { status, data, error } = await handler("GET");
        if (error) {
          console.log(`HTTP code: ${status}, Error: ${error}`);
        } else {
          setPokemonList(data);
        }
      };
      setTimeout(request, 100);
    }, [updateList]);

    useEffect(() => {
      if (pokemonList.length > 0) {
        const getPid = [];
        switch (true) {
          case pokemonList[0].pid.toString().length === 1:
            getPid.push(`00${pokemonList[0].pid}`);
            break;
          case pokemonList[0].pid.toString().length === 2:
            getPid.push(`0${pokemonList[0].pid}`);
            break;
          default:
            getPid.push(`${pokemonList[0].pid}`);
            break;
        }
        setImageUrl(
          `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`
        );
      }
    }, [pokemonList]);

    return (
      <>
        {pokemonList.length > 0 && (
          <main>
            <div className="pokemon-container">
              <PokemonCard
                id={pokemonList[0]._id}
                name={pokemonList[0].name}
                pid={pokemonList[0].pid}
                evolution={pokemonList[0].evolution}
                imageUrl={imageUrl}
                setUpdateList={setUpdateList}
                allowAddPokemon={allowAddPokemon}
                allowEditPokemon={allowEditPokemon}
                allowRemovePokemon={allowRemovePokemon}
              />
            </div>
          </main>
        )}
      </>
    );
  },
};
