import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { createContext } from 'react';
import Buttons from './Buttons';
import { useState } from 'react';
import MovieCard from './MovieCard';
import { contextData } from '../pages/Home';
import { useContext } from 'react';

const NavBar = () => {

  const { search, setSearch } = useContext(contextData)

  return (
    <>
      <header className='flex flex-col justify-center items-center w-full '>
        <h2 className='text-3xl p-5'>DBZ database</h2>
        <div className='flex h-10  items-center'>
          <div className='flex border rounded-xl '>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className=' p-2 outline-0' placeholder='Search for characters...' />
            <div className='relative' onClick={() => console.log("hello world")}>
              <FaSearch className='icons absolute'></FaSearch>
              <Buttons btn_atr={{ BackgroundC: "transparent" }}></Buttons>
            </div>

          </div>
          <div className='pl-3 h-full relative'>
            <h3 id='favoriteCount' className='absolute left-[75%] -top-3 z-50 bg-black w-[48%] text-center rounded-4xl'>0</h3>
            <div className='relative  h-full'>
              <FaRegHeart className='icons absolute'></FaRegHeart>
              <Buttons btn_atr={{ BackgroundC: "red" }}></Buttons>
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default NavBar
