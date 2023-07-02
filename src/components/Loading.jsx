import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Loading = () => {
  return (
    <>
  <div class="app__container flex flex-col mt-2 ml-[45%] h-screen relative">
  <div class="loading__overlay fixed inset-0 bg-black opacity-50 z-10  backdrop-filter backdrop-blur-lg"></div>
  <div class="gif__container z-20 relative">
    <div class="loading__text text-white text-3xl font-bold">
      Loading...
    </div>
    <div class="loading__spinner border-4 border-t-4 ml-6 border-gray-200 rounded-full animate-spin h-12 w-12 mt-4"></div>
  </div>
  {/* <div class="image__container mt-4">
    <CatchingPokemonIcon/>
  </div> */}
</div>


</>

  )
}

export default Loading