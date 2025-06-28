import React from "react";

import { useState, useEffect } from "react";
const Keyboard = ({word,onGuess,hungmanData}) => {
  let letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  let rows = [
    letters.slice(0, 10),
    letters.slice(10, 19),
    letters.slice(19, 26),
  ];

  const [inputValue, setinputValue] = useState([]);
  const [inputText, setinputText] = useState("");
  const [viewPotrait, setviewPotrait] = useState();

  let handleChange = (e) => {
    setinputValue(e.target.value);
  };

  let handleKeyClick = (letter) => {
    setinputText((prev) => prev + letter);
    if (!inputValue.includes(letter)) {
      setinputValue([...inputValue, letter]);
      onGuess(letter)
    }
  };


  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <div className="">
      <div className="flex justify-center items-centere">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          className="w-60  h-12 "
          placeholder="type here"
        />
      </div>

      <div className=" border-2 border-black w-full h-full ">
        {rows.map((row, rowIndex) => (
          <div className="flex justify-center " key={rowIndex}>
            {row.map((letter, index) => {
              return (
                <button
                  onClick={() => handleKeyClick(letter)}
                  onclic
                  disabled={inputValue.includes(letter)}
                  className={`text-xl p-3 ${
                    inputValue.includes(letter)
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : " "
                  } `}
                  key={index}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
