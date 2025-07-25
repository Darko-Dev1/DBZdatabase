import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FaHome } from "react-icons/fa";
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { sendData } from '../App';
import { useState } from 'react';

const Info = () => {
    const { id } = useParams()
    const { dt } = useContext(sendData)
    const datta = dt.items.filter((e) => {
        return parseInt(id) === e.id
    })
    console.log(datta)



    const saved = localStorage.getItem("likedItems");
    const a = JSON.parse(saved).filter((e) => {
        return parseInt(id) === e.id
    })
    console.log(a)


    return (
        <>
            <Link to="/">
                <div className='HomeBtn pl relative w-[15vw] h-[5vh]'>
                    <div className='relative h-full w-fu'>
                        <FaHome className='icons absolute'></FaHome>
                        <Buttons btn_atr={{ BackgroundC: "transparent" }}></Buttons>
                    </div>
                    <p className='text-center -m-3'>Home</p>
                </div>
            </Link>
            <div>
                {a.length !== 0 ? <h1>Status: Liked</h1>: <h1>Status: Not Liked</h1>}
                <img src={datta[0].image} alt="" />
            </div>
        </>
    )
}

export default Info
