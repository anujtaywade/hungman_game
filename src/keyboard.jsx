import React from 'react'

const Keyboard = () => {
    let letter = Array.from({length :26 },(_,i)=>String.fromCharCode(65+i))
    console.log(letter)

    
  return (
    <div>
      <div className='border-2 border-black w-56 h-28 '>
        
      </div>
    </div>
  )
}

export default Keyboard
