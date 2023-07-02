import React from 'react'
import { Navigate , Route, Routes} from 'react-router-dom'
import PokemonPage from './page/PokemonPage'
import HomePage from './page/HomePage'
import Navigation from './components/Navigation'


const AppRouter = () => {
  return (
    <div>
        <Routes>
           
            <Route index element={<HomePage/>}/>
            <Route path='pokemon/:id' element={<PokemonPage/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter