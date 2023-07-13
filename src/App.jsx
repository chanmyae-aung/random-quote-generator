import React, { useState } from "react";
import { StateContextCustom } from "./context/StateContext";
import { IoMdArrowDropright } from "react-icons/io";

const App = () => {
  const { quotes, setQuote, quote } = StateContextCustom();
  // console.log(quote);

  const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes));
    handleClick();
  };

  const handleClick = () => {
    let container = document.querySelector(".box");
    container.style.background = randomColor();
  };

  const randomColor = () => {
    let letters = "ABCDEF1234567890";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="box w-[60%] border p-5 mx-auto rounded-lg shadow transition ease-in duration-500 bg-gray-500 text-white">
          <h2 className="text-lg italic text-center font-bold py-4 h-32 transition ease-in duration-500">
            "{quote?.text}"
          </h2>
          <p className="pb-5 flex justify-end">_{quote?.author}</p>
          <button
            onClick={getNewQuote}
            className="p-3 flex justify-center items-center bg-green-600 text-xl text-white mx-auto  rounded-full"
          >
            <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
