import { useContext } from 'react'
import { sendData } from '../App'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../components/Buttons'
import { FaHome } from "react-icons/fa";

const Favorites = () => {

  const Liked = localStorage.getItem("likedItems")
  console.log(JSON.parse(Liked))

  const { dt } = useContext(sendData)
  console.log(dt)
  const [count, setCount] = useState(0)
  const likedItems = Liked ? JSON.parse(Liked) : [];
  const likedIds = likedItems.map(obj => obj.id);


  const filtered = dt.items ? dt.items.filter(item => likedIds.includes(item.id)) : [];
  console.log(filtered)

  return (
    <>
      <div className='flex relative p-3 mb-2 items-center'>
        <Link to="/">
          <div className='HomeBtn pl relative w-[15vw] h-[5vh]'>
            <div className='relative h-full w-fu'>
              <FaHome className='icons absolute'></FaHome>
              <Buttons btn_atr={{ BackgroundC: "transparent" }}></Buttons>
            </div>
            <p className='text-center -m-3'>Home</p>
          </div>
        </Link>

        <h1 className='absolute left-[50%] -translate-x-1/2 text-5xl'>Favorite List:</h1>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-20 gap-8 py-30 px-8'>

        {filtered.length > 0 ? filtered.map((e) => {
          return (
            <div key={e.id} className='CharCard relative h-[300px]'>
              <div className='h-10 flex absolute' onClick={(e) => { const newMessage = handleMessage(e.target.getAttribute("id")); setMessages(newMessage); addTab(newMessage); addFavorites(together); e.target.previousElementSibling.getAttribute("fill") === "red" ? e.target.previousElementSibling.setAttribute("fill", "currentColor") : e.target.previousElementSibling.setAttribute("fill", "red") }}>
                <div className='relative' title='like'>
                  <Buttons btn_atr="transparent" id={e.id}></Buttons>
                </div>
              </div>
              <Link to={`/char/${e.id}`}>
                <img src={e.image} alt={e.name} className='absolute imgs ' />
                <div id='DisplayNames' className='absolute left-[50%] top-[80%] w-full text-center h-[20%] z-40 flex items-center justify-center'>
                  <h1 className='text-2xl font-bold'>{e.name}</h1>
                </div>
              </Link>
            </div>
          )

        }) : <h1 className='text-center absolute left-[50%] -translate-x-[50%]'>You have no favorites...</h1>}

      </div>
    </>

  )
}

export default Favorites
