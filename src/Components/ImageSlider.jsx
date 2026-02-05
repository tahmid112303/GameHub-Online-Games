import React from 'react';
import { useEffect, useState } from "react";
import Game1 from '../assets/Game1.jpg'
import Game2 from '../assets/Game2.avif'
import Game3 from '../assets/Game3.avif'


const slides = [Game1,Game2,Game3];

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
    
        return () => clearInterval(timer);
      }, []);


    return (
<div className="relative w-full h-105 overflow-hidden rounded-2xl">

{slides.map((img, index) => (
  <img
    key={index}
    src={img}
    alt=""
    className={`absolute w-full h-full object-cover transition-opacity duration-700
      ${index === current ? "opacity-100" : "opacity-0"}
    `}
  />
))}

<div className='text-8xl font-bold text-white text-center relative top-40 z-1'>Explore <span className='text-6xl'>the</span> <br /> Gaming World</div>


<button
  onClick={() =>
    setCurrent((current - 1 + slides.length) % slides.length)
  }
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 
  text-white px-3 py-2 rounded-full"
>
  ‹
</button>

<button
  onClick={() => setCurrent((current + 1) % slides.length)}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
>
  ›
</button>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
  {slides.map((_, i) => (
    <div
      key={i}
      onClick={() => setCurrent(i)}
      className={`w-3 h-3 rounded-full cursor-pointer
        ${i === current ? "bg-blue-500" : "bg-white/50"}
      `}
    />
  ))}
</div>
</div>
    );
};

export default ImageSlider;