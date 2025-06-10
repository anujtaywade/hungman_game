import { generate, count } from "random-words";
import { useState ,useEffect} from 'react';
import './App.css'
import Keyboard from './keyboard'
function App() {
const [word, setword] = useState('');

useEffect(() => {
  let generateWord=generate({minLength:6 , maxLength:7})
  setword(generateWord)
}, []);

  return (
    <>
    
     <h1 className='text-4xl text-center font-semibold mt-10'>
      Hungman game
     </h1>
     <h2 className="text-center text-xl mt-5">
      The random word is {word}
     </h2>
     <Keyboard/>
    </>
  )
}

export default App
