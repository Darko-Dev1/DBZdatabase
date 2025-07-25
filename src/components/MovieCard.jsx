import React, { createContext } from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { contextData } from "../pages/Home"
import Buttons from './Buttons'
import { FaRegHeart } from "react-icons/fa";
import ActionTab from './ActionTab'

// charater card not movie
const MovieCard = () => {

    const { dt, load, search, setSearch, liked, setLiked } = useContext(contextData)
    const [action, setAction] = useState(false)
    const [messages, setMessages] = useState("")
    const [tabMessages, setTabMessages] = useState([]);

    const handleMessage = (id) => {

        const foundChar = dt.filter((e) => {
            return e.id === parseInt(id)
        })
        console.log(document.querySelector(".ActionTab"))
        return "You liked " + foundChar[0].name
        

    }

    const addFavorites = (newA) => {
        const { id, name } = newA;

        setLiked(prev => {
            // Check if the item exists
            const exists = prev.some(e => e.id === id);

            if (exists) {
                addTab("Removed from favorites")
                return prev.filter(e => e.id !== id);
            } else {

                return [...prev, { id, name }];
            }
        });
    };

    const addTab = (msg) => {
        setTabMessages(prev => {
            // If "no" is already in the tab list, don't add another
            if (msg === "Removed from favorites" && prev.includes("Removed from favorites")) {
                return prev; // skip adding duplicate "no"
            }

            const newTabs = [...prev, msg];

            let delay = 300 * newTabs.length;
            if (delay < 1000) {
                delay = 2000;
            }

            setTimeout(() => {
                setTabMessages(current => current.slice(1));
            }, delay);

            return newTabs;
        });
    };

    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-20 gap-8 py-30 px-8'>
                {!load ? dt.map((e) => {
                    const id = e.id
                    const name = e.name
                    const together = { id: id, name: name }

                    if (search !== "") {
                        if (e.name.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <div key={e.id} className='CharCard relative h-[300px]'>
                                    <div className='h-10 flex absolute' onClick={(e) => { const newMessage = handleMessage(e.target.getAttribute("id")); setMessages(newMessage); addTab(newMessage); addFavorites(together); e.target.previousElementSibling.getAttribute("fill") === "red" ? e.target.previousElementSibling.setAttribute("fill", "currentColor") : e.target.previousElementSibling.setAttribute("fill", "red") }}>
                                        <div className='relative' title='like'>
                                            <FaRegHeart className='icons absolute'></FaRegHeart>
                                            <Buttons btn_atr="transparent" id={e.id}></Buttons>
                                        </div>
                                    </div>
                                    <img src={e.image} alt={e.name} className='absolute imgs ' />
                                    <div id='DisplayNames' className='absolute left-[50%] top-[80%] w-full text-center h-[20%] z-40 flex items-center justify-center'>
                                        <h1 className='text-2xl font-bold'>{e.name}</h1>
                                    </div>
                                </div>
                            )
                        } else {
                            return
                        }
                    } else {
                        return (
                            <div key={e.id} className='CharCard relative h-[300px]'>
                                <div className='h-10 flex absolute' onClick={(e) => { const newMessage = handleMessage(e.target.getAttribute("id")); setMessages(newMessage); addTab(newMessage); }}>
                                    <div className='relative' title='like'>
                                        <FaRegHeart className='icons absolute'></FaRegHeart>
                                        <Buttons btn_atr="transparent" id={e.id}></Buttons>
                                    </div>
                                </div>
                                <img src={e.image} alt={e.name} className='absolute imgs ' />
                                <div id='DisplayNames' className='absolute left-[50%] top-[80%] w-full text-center h-[20%] z-40 flex items-center justify-center'>
                                    <h1 className='text-2xl font-bold'>{e.name}</h1>
                                </div>
                            </div>
                        )
                    }

                }) :
                    <h1>
                        Sorry, there is a problem with our data...
                    </h1>}


            </div>
            <div className='ActionTab sticky bottom-0 left-[100%] z-1000000000 flex flex-col-reverse justify-center items-end gap-4 w-[10vw]'>
                {tabMessages[0] === '' ? tabMessages.slice(0) : tabMessages.map((msg, i) => (
                    <ActionTab key={i} value={msg} />
                ))}
            </div>
        </>
    );
}

export default MovieCard
