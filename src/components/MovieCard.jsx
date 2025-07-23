import React, { createContext } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { contextData } from "../pages/Home"
import Buttons from './Buttons'
import { FaRegHeart } from "react-icons/fa";


// charater card not movie
const MovieCard = ({ movie }) => {

    const { dt, load } = useContext(contextData)
    console.log(dt)

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-20 gap-8 py-30 px-8'>
            {!load ? dt.map((e) => {
                return (
                    <div key={e.id} className='CharCard relative h-[300px]'>
                        <div className='h-10 flex absolute'>
                            <div className='relative'>
                                <FaRegHeart className='icons absolute'></FaRegHeart>
                                <Buttons btn_atr="transparent"></Buttons>
                            </div>
                        </div>
                        <img src={e.image} alt={e.name} className='absolute imgs ' />
                        <div id='DisplayNames' className='absolute left-[50%] top-[80%] w-full text-center h-[20%] z-40 flex items-center justify-center'>
                            <h1 className='text-2xl font-bold'>{e.name}</h1>
                        </div>
                    </div>
                )
            }) :
                <h1>
                    Sorry, there is a problem with our data...
                </h1>}
        </div>
    );
}

export default MovieCard
