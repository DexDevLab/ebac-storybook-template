import React, { useEffect, useState } from "react";
import handler from "../../api/handler";
import PokemonCard from "../components/PokemonCard";
import "./home.css";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [createPokemon, setCreatePokemon] = useState(false);
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
    setTimeout(request, 1500);
  }, [updateList]);

  return (
    <main>
      <h1>Coleção pessoal de POKÉMONS</h1>
      <button onClick={() => setCreatePokemon(true)}>
        Adicionar Pokémon à sua coleção
      </button>
      {createPokemon && (
        <div className="create-card">
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        </div>
      )}
      <div className="pokemon-container">
        {pokemonList.map(({ _id, name, pid, evolution }) => {
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
            <PokemonCard
              key={_id}
              id={_id}
              pid={pid}
              name={name}
              imageUrl={imageUrl}
              evolution={evolution}
              updateList={updateList}
              setUpdateList={setUpdateList}
            />
          );
        })}
      </div>
    </main>
  );
}
