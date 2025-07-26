import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FaHome } from "react-icons/fa";
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { sendData } from '../App';
import { useState } from 'react';
import { FaPerson } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { IoBonfireSharp } from "react-icons/io5";
import { PiPersonSimple } from "react-icons/pi";
import { FaTransgender } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";

const Info = () => {
    const { id } = useParams()
    const { dt } = useContext(sendData)
    const datta = dt.items.filter((e) => {
        console.log(parseInt(id),  e.id)
        return parseInt(id) === e.id

    })
    console.log(datta[0].name)

    const saved = localStorage.getItem("likedItems");
    const a = JSON.parse(saved).filter((e) => {
        return parseInt(id) === e.id
    })
    console.log(id)
    console.log(dt)


    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <Link to="/">
                    <div className='HomeBtn pl relative w-[15vw] h-[5vh]'>
                        <div className='relative h-full w-fu'>
                            <FaHome className='icons absolute'></FaHome>
                            <Buttons btn_atr={{ BackgroundC: "transparent" }}></Buttons>
                        </div>
                        <p className='text-center -m-3'>Home</p>
                    </div>

                </Link>
                {a.length !== 0 ? <h1>Status: Liked</h1> : <h1>Status: Not Liked</h1>}

            </div>

            <div>
                <div id='presentation' >
                    <img src={datta[0].image} className='w-[30%]' alt="" />
                    <h1>{datta[0].name}</h1>
                </div>
                <div className='grid grid-cols-2 text-center gap-4 p-10 '>
                    <div className="charinfo h-[8vh] relative order-0 ">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'>
                                <FaPerson />
                                Name:
                            </div>
                            {datta[0].name}
                        </div>
                    </div>

                    <div className="charinfo h-[8vh] relative order-3 ">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'>
                                <FaFistRaised />
                                Base Power:
                            </div>
                            {datta[0].ki}
                        </div>
                    </div>
                    <div className="charinfo h-[8vh] relative order-2">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'>
                                <PiPersonSimple />
                                Race:
                            </div>
                            {datta[0].race}
                        </div>
                    </div>
                    <div className="charinfo h-[8vh] relative order-5">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'>
                                <IoBonfireSharp />
                                Max Power:
                            </div>

                            {datta[0].maxKi}
                        </div>
                    </div>
                    <div className="charinfo h-[8vh] relative order-3 ">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'>
                                <FaTransgender /> Gender:
                            </div>

                            {datta[0].gender}
                        </div>
                    </div>
                    <div className="charinfo h-[8vh] relative order-6">
                        <div className='innerInfo w-full bg-red-600 h-full flex justify-between items-center p-5 rounded-2xl'>
                            <div className='flex items-center w-[40%] justify-evenly'><FaFire /> Affiliation:</div>
                            {datta[0].affiliation}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
