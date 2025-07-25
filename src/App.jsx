import { ssrImportMetaKey } from 'vite/module-runner'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Info from './pages/Info'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const sendData = createContext()
const App = () => {

  const [Data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://dragonball-api.com/api/characters?limit=50");
        const res = await data.json();
        setData(res)
      } catch (error) {
        console.error("Something went wrong with the data", error);
      } finally {
        setLoading(false);
      }
    };
    getData()
  }, []);


  return (
    <>
      {!loading ? <sendData.Provider value={{ dt: Data }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/char/:id" element={<Info></Info>}></Route>
          <Route path="/favorite" element={<Favorites></Favorites>}></Route>
        </Routes>
      </sendData.Provider> : <h1>Data not fetched correctly</h1>
      }
    </>


  )
}


export default App

