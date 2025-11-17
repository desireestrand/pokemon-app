import { useEffect, useState } from "react"

function Pokemon({ pokemonURL }) {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const getPokemon = async () => {
            let response = await fetch(pokemonURL)
            let data = await response.json()
            setPokemon(data)
        }

        getPokemon()
    }, [pokemonURL])

    return(
        <>
        { pokemon && <div>
            <h2>{pokemon.name.toUpperCase()}</h2>

            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />

            <h3>Type(s):</h3>
            <ul>
                {pokemon.types.map((type) => <li key={type.type.name}>{type.type.name}</li>)}
            </ul>

            <p>Weight: {pokemon.weight} hg</p>
            
            <p>Height: {pokemon.height} dm</p>
        </div> }
        </>
    )
}

export default Pokemon