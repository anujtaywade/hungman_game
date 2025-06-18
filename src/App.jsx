import { generate, count } from "random-words";
import { useState ,useEffect} from 'react';

import './App.css'
import Keyboard from './keyboard'
import HungmanPotrait from "./hungmanPotrait";
import CorrectGuess from './correctGuess';

function App() {
 const [word, setword] = useState('');
 const [gussedLetter, setgussedLetter] = useState([]);

let handleGuess =(letter)=>{
  if(!gussedLetter.includes(letter)){
    setgussedLetter((prev)=>([...prev,letter]))
  }
}   

useEffect(() => {
  let generateWord=generate({minLength:6 , maxLength:7 , })
  setword(generateWord)

  
  
}, []);


  return (
    <>
    <div className="overflow-x-hidden h-full">
     <h1 className='text-4xl text-center font-semibold mt-10'>
      Hungman game
     </h1>
      <HungmanPotrait/>
     <h2 className={`text-center text-xl mt-5 `} >
      The random word is {word}
     </h2>

   
    
     <Keyboard word={word} onGuess={handleGuess} />
     <CorrectGuess word={word} gussedLetter={CorrectGuess}/>
    </div>

    
    
    </>
  )
}

export default App
