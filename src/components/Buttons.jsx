import React from 'react'

const Buttons = ({ btn_atr, id }) => {

    return (
        <button id={id} style={{ backgroundColor: `${btn_atr.BackgroundC}` }} className='h-full opacity-40'>
        </button>
    )
}

export default Buttons
