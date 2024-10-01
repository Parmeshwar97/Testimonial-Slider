import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
export default function Buttons({ setCount, reviews, count }) {
  function handleLeftSlider() {
    if (count === 0) {
      setCount(reviews.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  function handleRightSlider() {
    setCount(count + 1);
    if (reviews.length - 1 === count) {
      setCount(0);
    }
  }
  function handleSurprise() {
    let rnd = Math.floor(Math.random() * reviews.length);
    setCount(rnd);
  }
  return (
    <div className="flex flex-col justify-center text-center items-center gap-5">
      <div className="flex items-center gap-9">
        <button
          className="text-xl text-violet-400 hover:text-violet-500"
          onClick={handleLeftSlider}
        >
          <FaLessThan />
        </button>
        <button
          className="text-xl text-violet-400 hover:text-violet-500"
          onClick={handleRightSlider}
        >
          <FaGreaterThan />
        </button>
      </div>
      <button
        className="bg-violet-400 hover:bg-violet-500 font-bold rounded px-4 py-1 text-white"
        onClick={handleSurprise}
      >
        Surprise Me
      </button>
    </div>
  );
}
