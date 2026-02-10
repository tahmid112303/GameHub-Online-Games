import React from 'react';
import Star from '../assets/star.webp'
import { useNavigate } from 'react-router';

const Game = ({game}) => {

    const {id,coverPhoto,title,ratings,category}=game
    const navigate=useNavigate()

    return (
   <div onClick={()=>navigate(`/gameDetails/${id}`)} className="card bg-blue-100 w-96 shadow-sm cursor-pointer">
  
  <figure className="px-10 pt-10">
    <img
      src={coverPhoto}
      className="rounded-xl h-45 w-75" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <span className='flex items-center gap-2'>
      <img className='w-8 h-8' src={Star} alt="" />
      <span className='font-bold text-xl'>{ratings}</span>
    </span>
  </div>

      <div className='m-auto'>
      <div className="w-37.5 h-12.5 flex items-center justify-center border-2 border-gray-600 font-bold text-xl mb-4 rounded-2xl bg-orange-200">
        {category}
    </div>
      </div>
</div>
    );
};

export default Game;