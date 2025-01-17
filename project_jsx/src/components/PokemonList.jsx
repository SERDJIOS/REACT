import Pokemon from "./Pokemon"
function PokemonList(props) {
    return (
        <>
            <div>
                {
                    props.pokemons.map(p => (
                        <Pokemon key={p.id} name={p.name} type={p.type}/>
                    ))
                }
            </div>
        </>
    )
}

export default PokemonList