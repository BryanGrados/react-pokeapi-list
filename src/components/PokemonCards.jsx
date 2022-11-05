const PokemonCards = ({ pokemon, index }) => {

    return (
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {pokemon.map((p, i) => (
                <div className='relative flex flex-col items-center justify-center p-4 space-y-3 rounded-lg shadow-lg bg-zinc-700' key={i}>
                    <div className='absolute top-0 left-0 p-2 text-xs font-bold text-white bg-red-500 rounded-bl-lg'>{index[i]}</div>
                    <div className='flex items-center justify-center w-24 h-24 rounded-full bg-zinc-600'>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index[i]}.png`} alt={p} className='w-24 h-24' />
                    </div>
                    <div className='flex items-center justify-center w-full h-10 text-center text-white rounded-lg bg-zinc-600'>
                        <h1 className='text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-orange-400 to-yellow-500'>{p.charAt(0).toUpperCase() + p.slice(1)}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PokemonCards