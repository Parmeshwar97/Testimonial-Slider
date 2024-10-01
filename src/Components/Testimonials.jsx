import React, { useState } from "react";
import Buttons from "./Buttons";
import Card from "./Card";

export default function Testimonials({ reviews }) {
  let num = 1;
  let [count, setCount] = useState(0);
  return (
    <div className="bg-white rounded-md flex items-center pt-10 pb-5 flex-col gap-8 px-10 relative">
      <Card reviews={reviews[count]} />
      <Buttons setCount={setCount} count={count} reviews={reviews} />
    </div>
  )
}
