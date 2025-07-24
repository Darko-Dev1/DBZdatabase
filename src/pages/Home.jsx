import React from 'react'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import NavBar from '../components/NavBar'
import { createContext } from 'react'
import { useEffect } from 'react'


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

    const [search, setSearch] = useState("");

    return (
        <contextData.Provider value={{ dt: Data.items, load: loading, search, setSearch}}>
            <NavBar></NavBar>
            <MovieCard></MovieCard>
        </contextData.Provider>

    )
}

export default Home
