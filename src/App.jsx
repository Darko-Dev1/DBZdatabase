import { ssrImportMetaKey } from 'vite/module-runner'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { Routes, Route  } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  )
}


export default App

