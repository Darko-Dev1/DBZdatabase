import React from 'react'

const Buttons = ({ btn_atr }) => {

    console.log(btn_atr)

    return (
        <button style={{ backgroundColor: `${btn_atr.BackgroundC}` }} className='h-full opacity-40'>
        </button>
    )
}

export default Buttons
