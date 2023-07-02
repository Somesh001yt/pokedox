import React from 'react'
import { Outlet } from 'react-router-dom';
import Logo from '../assests/pokedex.png'

const Navigation = ({pokemonFilter}) => {
  return (
    <div>
    <div className="flex bg-[#f8f8f8] w-full h-16 justify-between mb-16">
      <div className="w-40">
        <img className='w-36 h-12 mt-4 ml-4' src={Logo} alt="" />
      </div>
      <input
        className="bg-white w-40 shadow-2xl mr-20 text-black rounded-2xl h-8 mt-4 pl-3"
        onChange={(e) => pokemonFilter(e.target.value)}
        type="search" placeholder='search'
      />
    </div>
    <Outlet />
  </div>
  
        )
}

export default Navigation;