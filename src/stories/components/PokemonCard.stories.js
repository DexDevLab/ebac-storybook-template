import { fn } from "@storybook/test";
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
  args: {
    id: 0,
    name: "Farfetch'd",
    pid: 83,
    evolution: 1,
    createPokemon: false,
    setCreatePokemon: fn(),
    updateList: 0,
    setUpdateList: fn(),
    allowAddPokemon: true,
    allowEditPokemon: true,
    allowRemovePokemon: true,
  },
};

export const Default = {
  render: ({ id, pid, name, evolution }) => {
    const getPid = [];
    switch (true) {
      case pid.toString().length === 1:
        getPid.push(`00${pid}`);
        break;
      case pid.toString().length === 2:
        getPid.push(`0${pid}`);
        break;
      default:
        getPid.push(`${pid}`);
        break;
    }
    const imageUrl = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`;
    return (
      <main>
        <div className="pokemon-container">
          <PokemonCard
            key={id}
            id={id}
            name={name}
            pid={pid}
            imageUrl={imageUrl}
            evolution={evolution}
          />
        </div>
      </main>
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
  render: ({
    id,
    pid,
    name,
    evolution,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    const getPid = [];
    switch (true) {
      case pid.toString().length === 1:
        getPid.push(`00${pid}`);
        break;
      case pid.toString().length === 2:
        getPid.push(`0${pid}`);
        break;
      default:
        getPid.push(`${pid}`);
        break;
    }
    const imageUrl = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`;
    return (
      <main>
        <div className="pokemon-container">
          <PokemonCard
            key={id}
            id={id}
            name={name}
            pid={pid}
            imageUrl={imageUrl}
            evolution={evolution}
            allowAddPokemon={allowAddPokemon}
            allowEditPokemon={allowEditPokemon}
            allowRemovePokemon={allowRemovePokemon}
          />
        </div>
      </main>
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
    id,
    pid,
    name,
    evolution,
    createPokemon,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    return (
      <main>
        <div className="pokemon-container">
          <PokemonCard
            key={id}
            id={id}
            name={name}
            pid={pid}
            evolution={evolution}
            createPokemon={createPokemon}
            allowAddPokemon={allowAddPokemon}
            allowEditPokemon={allowEditPokemon}
            allowRemovePokemon={allowRemovePokemon}
          />
        </div>
      </main>
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
    id,
    pid,
    name,
    evolution,
    createPokemon,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    return (
      <main>
        <div className="pokemon-container">
          <PokemonCard
            key={id}
            id={id}
            name={name}
            pid={pid}
            evolution={evolution}
            createPokemon={createPokemon}
            allowAddPokemon={allowAddPokemon}
            allowEditPokemon={allowEditPokemon}
            allowRemovePokemon={allowRemovePokemon}
          />
        </div>
      </main>
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
  render: ({
    id,
    pid,
    name,
    evolution,
    allowAddPokemon,
    allowEditPokemon,
    allowRemovePokemon,
  }) => {
    const getPid = [];
    switch (true) {
      case pid.toString().length === 1:
        getPid.push(`00${pid}`);
        break;
      case pid.toString().length === 2:
        getPid.push(`0${pid}`);
        break;
      default:
        getPid.push(`${pid}`);
        break;
    }
    const imageUrl = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${getPid[0]}.png`;
    return (
      <main>
        <div className="pokemon-container">
          <PokemonCard
            key={id}
            id={id}
            name={name}
            pid={pid}
            imageUrl={imageUrl}
            evolution={evolution}
            allowAddPokemon={allowAddPokemon}
            allowEditPokemon={allowEditPokemon}
            allowRemovePokemon={allowRemovePokemon}
          />
        </div>
      </main>
    );
  },
};
