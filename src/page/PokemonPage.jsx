import React from 'react';
import { Link } from 'react-router-dom';
import pokemonStyles from './Pokemonstyle';
import Pokemon from '../assests/charmandar.png'

const PokemonPage = ({ pokemon }) => {
  const getTypeStyle = (type) => {
    return pokemonStyles[type] || {}; 
  };

  const type = pokemon.types[0].type.name;
  const typeStyle = getTypeStyle(type);

  return (
    <div className="w-full">
      <div className="">
        <Link to={`/pokemon/${pokemon.id}`}>
          <div
            className=" p-4 rounded-lg shadow-2xl mb-6 w-56 h-72 mt-4 place-content-center gap-4 hover:scale-110 transition duration-500 transform"
            style={typeStyle} 
          >
            <img className="mx-auto w-40 h-40 mt-6 mb-2 " 
            src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}  />

            <div className="flex justify-center">
              <p className="mr-7">
                <span className="font-bold"># 0</span>
                {pokemon.id}
              </p>
              <h2>{pokemon.name}</h2>
            </div>
            <h2 className='ml-16'>{type}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonPage;
