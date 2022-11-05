import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import PaginationButtons from './components/Pagination';
import PokemonCards from './components/PokemonCards';
import LoadingLayout from './components/LoadingLayout';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
      setIndex(res.data.results.map(p => p.url.split('/')[6]));
    })
  }, [currentPageUrl])

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div className="bg-zinc-900 min-h-min">
      <div className='container bg-zinc-800 '>
        <div className='flex items-center justify-center'>
          <h1 className="p-2 font-mono text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-orange-400 to-yellow-500">Pokedex by Z.dev</h1>
        </div>
        <PaginationButtons
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          index={index}
        />
        <PokemonCards pokemon={pokemon} index={index} />
        <PaginationButtons
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          index={index}
        />
      </div>
      <LoadingLayout loading={loading} />
    </div>
  )
}

export default App
