import React from 'react'
import { Navigate , Route, Routes} from 'react-router-dom'
import PokemonPage from './page/PokemonPage'
import HomePage from './page/HomePage'
import Error from './page/404'

const AppRouter = () => {
  return (
    <div>
        <Routes>  
            <Route index element={<HomePage/>}/>
            <Route path='pokemon/:id' element={<PokemonPage/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter