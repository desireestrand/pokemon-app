import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const getPokemons = async () => {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            let data = await response.json();
            setPokemonList(data.results);
        };

        getPokemons();
    }, []);

    return (
        <div className="pokemon-choice-container">
            <div className="pokemon-choice">
                <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
                    <option value="">--- Choose a Pokémon ---</option>
                    {pokemonList.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.url}>
                            {pokemon.name}
                        </option>
                    ))}
                </select>

                <button onClick={() => setPokemonData(selectedPokemon)}>I Choose You!</button>
            </div>

            <div className="pokemon-card-wrapper">
                {pokemonData && <Pokemon pokemonURL={pokemonData}/> }
            </div>
        </div>
    )
}

export default PokemonApplication;