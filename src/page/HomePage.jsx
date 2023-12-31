import React, { useEffect, useState } from 'react'
import axiox from 'axios'
import PokemonPage from './PokemonPage';
import Navigation from '../components/Navigation';
import TuneIcon from '@mui/icons-material/Tune';
import Loading from '../components/Loading';
import FilterModal from './FilterModal';

const HomePage = () => {
 const [pokemon , setPokemon] = useState([]);
 const [orginal,setOrginal] = useState(pokemon)
 const [loading , setLoading] = useState(true);
const [filter, setFilter] = useState(false);

const getPokemonList = async () =>{
  let pokemonArray = [];


  for(let i =1; i<= 151; i++){
    pokemonArray.push(await getPokemonData(i));
  
  }
  setOrginal(pokemonArray)


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

  setPokemon(filterPokemon);
}

const getPokemonData = async (id) =>{
  const res = await axiox.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res;
}


function otherFilter(value){
const temp1 = []

const temp = orginal.filter( currentElement => currentElement.data.types.filter( param => param.type.name == value ? temp1.push(currentElement) : false) ) 
setPokemon(temp1);
  }



useEffect(()=>{
  getPokemonList();
},[])

const handleOpen = () => setFilter(true);


  return (
    <div className='bg-[#f8f8f8]'>
       <FilterModal  otherFilter={otherFilter} filter={filter} setFilter={setFilter}  />
       <Navigation pokemonFilter={pokemonFilter}/>
       <div className='flex m-6 cursor-pointer' onClick={handleOpen}>
        <TuneIcon/>
       <p className='ml-2'>Filter</p>
       </div>
  {loading ? (
  <Loading/>
  ) : (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 mx-10">

   { pokemon.map((item) => (
     <div key={item.id}>
     <PokemonPage pokemon={item.data} />
      </div>
    ))}
    </div>
  )}
</div>

  )
}

export default HomePage