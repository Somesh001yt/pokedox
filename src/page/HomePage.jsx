import React, { useEffect, useState } from 'react'
import axiox from 'axios'
import PokemonPage from './PokemonPage';
import Navigation from '../components/Navigation';
import TuneIcon from '@mui/icons-material/Tune';
import Loading from '../components/Loading';
import FilterModal from './FilterModal';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
 const [pokemon , setPokemon] = useState([]);
 const [loading , setLoading] = useState(true);
 const [hasMore , setHasMore] = useState(true);
 const [page, setPage] = useState(1);
 const [dataSource , setDataSource] = useState(Array.from({length : 12}));
const [filter, setFilter] = React.useState(false);
const getPokemonList = async () =>{
  let pokemonArray = [];

  for(let i =1; i<= 300; i++){
    pokemonArray.push(await getPokemonData(i));
  }
  console.log(pokemonArray);
  setPokemon(pokemonArray);
  setLoading(false);
}

const pokemonFilter = (name) =>{
  let filterPokemon = [];
  if(name ===''){
    getPokemonList();
  }

  for(let i in pokemon){
    if(pokemon[i].data.name.includes(name)){
      filterPokemon.push(pokemon[i])
    }
  }
  console.log(filterPokemon)
  setPokemon(filterPokemon);
}

const fetchmoreData = () => {
  if (pokemon.length >= page * 12) {
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    }, 500);
  } else {
    setHasMore(false);
  }
};
const getPokemonData = async (id) =>{
  const res = await axiox.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res;
}



useEffect(()=>{
  getPokemonList();
},[])



const handleOpen = () => setFilter(true);


  return (
    <div className='bg-[#f8f8f8]'>
       <FilterModal filter={filter} setFilter={setFilter} />
       <Navigation pokemonFilter={pokemonFilter}/>
       <div className='flex m-6 cursor-pointer' onClick={handleOpen}>
        <TuneIcon/>
       <p className='ml-2'>Filter</p>
       </div>
  {loading ? (
  <Loading/>
  ) : (
   
<InfiniteScroll dataLength= {dataSource.length}
next={fetchmoreData}
hasMore = {hasMore}
loader= {<p>Loading...</p>}>
 <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 mx-10">
{ pokemon.map((item) => (
     <div key={item.id}>
     <PokemonPage pokemon={item.data} />
      </div>
    ))}
    </div>
</InfiniteScroll>
  
  )}
</div>

  )
}

export default HomePage