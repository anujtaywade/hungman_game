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

  
    const [inputText, setinputText] = useState("");
    
    useEffect(() => {
      console.log(inputText)
    }, [inputText]);
    

    let handleKeyClick=(key)=>{
      setinputText((prev)=>prev + key)
      console.log(setinputText)
    }
  return (
    <div className=''>
      <div className=' border-2 border-black w-full h-full '>
        
          {rows.map((row , rowIndex)=>(
            <div className='flex justify-center ' key={rowIndex}>
              {row.map((letter,index )=>{
                
                return(
                  <button
                  onClick={()=>handleKeyClick(letter)}
                  className='text-xl p-3 ' 
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
