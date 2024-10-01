import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

export default function Card({ reviews }) {
  
  return (
    <div className="flex items-center flex-col text-center gap-5">
      <div className="size-1/5 absolute -top-16 left-9">
        <img className="rounded-full" src={reviews.image} alt="image" />
      </div>
      <div className=" text-center">
        <h2 className="font-bold text-2xl">{reviews.name}</h2>
        <p className="font-light tracking-tight text-violet-800">{reviews.job}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-violet-400">
        <FaQuoteLeft />
      </span>
      <p className="h-28">{reviews.text}</p>
      <span className="text-violet-400">
        <FaQuoteRight />
      </span>
      </div>
      
    </div>
  )
}
