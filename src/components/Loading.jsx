import React from 'react'
import spin from "../assests/spin.gif"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Loading = () => {
  return (
    <>
  <div className="flex justify-center items-center h-screen w-screen absolute top-0 left-0 bg-[#181B1D]">
      <img src={spin} alt="" className='' />
  </div>


</>

  )
}

export default Loading