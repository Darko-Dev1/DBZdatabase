import React from 'react'

const Buttons = ({ btn_atr }) => {

    console.log(btn_atr)

    return (
        <button style={{ backgroundColor: `${btn_atr.BackgroundC}` }} className='h-full opacity-60'>
        </button>
    )
}

export default Buttons
