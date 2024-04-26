import React, { useState } from "react";
import handler from "../../api/handler";

export default function PokemonCard({
  id,
  name,
  pid,
  imageUrl,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList,
  allowAddPokemon = true,
  allowEditPokemon = true,
  allowRemovePokemon = true,
}) {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false);
  const [nameInput, setNameInput] = useState(name ?? "");
  const [pidInput, setPidInput] = useState(pid ?? "");
  const [evolutionInput, setEvolutionInput] = useState(
    evolution?.toString() ?? ""
  );

  const formHandler = async (fn) => {
    try {
      const body = {
        name: nameInput,
        pid: pidInput,
        evolution: Number(evolutionInput),
      };
      await handler(fn, { query: { id }, body: body });
      switch (fn) {
        case "POST":
          setCreatePokemon && setCreatePokemon(false);
          break;
        case "PUT":
          setCreatePokemon && setEditPokemon(false);
          break;
        default:
          break;
      }
      setUpdateList && setUpdateList(updateList + 1);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <div className="pokemon-card">
      {editPokemon ? (
        <div>
          <label>
            Nome:
            <input
              type="text"
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>
          <label>
            Número do Pokémon:
            <input
              type="text"
              onChange={(e) => setPidInput(e.target.value)}
              value={pidInput}
            />
          </label>
          <label>
            Estágio de evolução:
            <input
              type="number"
              onChange={(e) => setEvolutionInput(e.target.value)}
              value={evolutionInput}
            />
          </label>
          <button
            onClick={() =>
              createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
            }
          >
            Cancela
          </button>
          <button onClick={() =>
             formHandler((createPokemon && allowAddPokemon) ? "POST" : "PUT")}>
            Confirma
          </button>
        </div>
      ) : (
        <>
          <h4>#{pid}</h4>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} />
          <h4>Estágio de evolução: {evolution}</h4>
          <button onClick={() => setEditPokemon(allowEditPokemon)}>Alterar</button>
          <button onClick={() => allowRemovePokemon && formHandler("DELETE")}>Remover</button>
        </>
      )}
    </div>
  );
}
