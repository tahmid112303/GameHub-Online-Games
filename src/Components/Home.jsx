import React from 'react';
import ImageSlider from './ImageSlider';
import { useLoaderData } from 'react-router';
import Game from './Game';

const Home = () => {
    const games=useLoaderData()
    return (
    <div className='bg-slate-900 min-h-screen'>
        <div className="p-6">
           <ImageSlider></ImageSlider>
        </div>

        <div className='flex flex-col text-white pl-16 mt-10'>
            <h1 className='font-bold text-[34px]'>Popular Games</h1>

            <h2 className='text-[20px]'>Top Rated Games You Can't Miss</h2>
        </div>

        <div className='grid grid-cols-3 mx-auto w-fit gap-9 mt-10'>
            {games.map(game=><Game
                game={game} 
                key={game.id}
            ></Game>)}
        </div>
        
        <div className='text-white flex flex-col gap-5 items-center mt-24'>
            <h1 className='text-6xl text-center font-bold'>Join Our Newsletter</h1>

            <h2 className='font-bold'>Stay up to date with the latest gaming news and exclusive offers</h2>

            <span className='mb-24 flex gap-6 items-center'>
               <input type="email" name="email" placeholder='Enter Your Email Address' id="email" className='bg-gray-200 w-125 
               h-15 text-black pl-4' />

               <button className="btn btn-primary text-white font-bold w-50 h-15 text-2xl border-0">Subscribe</button>
            </span>
        </div>

    </div>
    );
};

export default Home;