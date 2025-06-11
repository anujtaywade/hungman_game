import React from 'react'
import { useState,useEffect } from "react";
const Keyboard = () => {
    let letters = Array.from({length :26 },(_,i)=>String.fromCharCode(65+i))
    console.log(letters)

    let rows= [
      letters.slice(0,10),
      letters.slice(10,19),
      letters.slice(19,26)
    ]

    const [input, setinput] = useState();
    
  return (
    <div className='relative '>
      <div className='fixed bottom-10 border-2 border-black w-full h-56 '>
        
          {rows.map((row , rowIndex)=>(
            <div className='flex justify-center' key={rowIndex}>
              {row.map((letter,index )=>{
                
                return(
                  <button
                
                  className='text-3xl p-3 ' 
                  key={index}>
                    {letter}
                  </button>
                )
                
              })}
            </div>
            
          ))}
       
      </div>
    </div>
  )
}

export default Keyboard
