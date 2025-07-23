import React from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import NavBar from '../components/NavBar'
import { createContext } from 'react'
import { useEffect } from 'react'
import ActionTab from '../components/ActionTab'

export const contextData = createContext()

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [Data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch("https://dragonball-api.com/api/characters?limit=50");
                const res = await data.json();
                setData(res)
                console.log(Data)

            } catch (error) {
                console.error("Something went wrong with the data", error);
            } finally {
                setLoading(false);
            }
        };
        getData()
    }, []);



    return (
        <contextData.Provider value={{ dt: Data.items, load: loading}}>
            <NavBar></NavBar>
            <MovieCard></MovieCard>
            <ActionTab></ActionTab>
        </contextData.Provider>

    )
}

export default Home
