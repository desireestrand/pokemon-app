import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

function PokemonApplication() {
    const [pokemonList, setPokemonList] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [pokemonToDisplay, setPokemonToDisplay] = useState(null)

    useEffect(() => {
        const getPokemons = async () => {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            let data = await response.json()
            setPokemonList(data.results)
        }

        getPokemons()
    }, [])

    return(
        <>
        <h2>Choose a Pokémon</h2>

        <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value="">--- Choose a Pokémon ---</option>
            {pokemonList.map((pokemon) => <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>)}
        </select>

        <button onClick={() => setPokemonToDisplay(selectedPokemon)}>Get data</button>
        
        { pokemonToDisplay && <Pokemon pokemonURL={pokemonToDisplay}/> }
        </>
    )
}

export default PokemonApplication