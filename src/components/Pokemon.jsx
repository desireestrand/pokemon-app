import { useEffect, useState } from "react";

const typeColors = {
    grass: ["#19a648", "#3fa129"],
    bug: ["#19a648", "#91a119"],
    fire: ["#d8223b", "#e62829"],
    water: ["#05a8d9", "#2980ef"],
    ice: ["#05a8d9", "#3dcef3"],
    electric: ["#fcd021", "#fac000"],
    fighting: ["#b16232", "#ff8000"],
    rock: ["#b16232", "#afa981"],
    ground: ["#b16232", "#915121"],
    psychic: ["#957dab", "#ef4179"],
    ghost: ["#957dab", "#704170"],
    normal: ["#d2d0cf", "#9fa19f"],
    flying: ["#d2d0cf", "#81b9ef"],
    dark: ["#2e7077", "#624d4e"],
    poison: ["#2e7077", "#9141cb"],
    steel: ["#9b9e8c", "#60a1b8"],
    dragon: ["#948f31", "#5060e1"],
    fairy: ["#d6457e", "#ef70ef"]
};

function Pokemon({ pokemonURL }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            let response = await fetch(pokemonURL);
            let data = await response.json();
            setPokemon(data);
        };

        getPokemon();
    }, [pokemonURL]);

    useEffect(() => {
        if (!pokemon) return;
        
        document.getElementById("h1").style.color = typeColors[pokemon.types[0].type.name][0]
        document.body.style.background = `linear-gradient(180deg, #f0f0f0 65%, ${typeColors[pokemon.types[0].type.name][0]} 100%)`;
    }, [pokemon]);

    return(
        <>
            {pokemon && (
                <div 
                    className="pokemon-card" 
                    style={{ 
                        backgroundColor: typeColors[pokemon.types[0].type.name][0],
                        backgroundImage: `linear-gradient(90deg, ${typeColors[pokemon.types[0].type.name][0]}, rgba(255, 255, 255, 0.4)`,
                    }}
                >
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                    <div className="pokemon-card-text">
                        <h2>
                            <span className="pokemon-tag">#{pokemon.id}</span> {pokemon.name}
                        </h2>

                        <div className="type-text">
                            <p><strong>Type</strong></p>
                            <ul>
                                {pokemon.types.map((type) => (
                                    <li key={type.type.name} style={{ background: typeColors[type.type.name][1] }}>
                                        {type.type.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p><strong>Weight</strong> {pokemon.weight} hg</p>

                        <p><strong>Height</strong> {pokemon.height} dm</p>
                    </div>
                </div> 
            )}
        </>
    );
}

export default Pokemon;