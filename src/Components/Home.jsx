import React from 'react';
import ImageSlider from './ImageSlider';
import { useLoaderData } from 'react-router';
import Game from './Game';

const Home = () => {
    const games=useLoaderData()
    console.log(games);
    return (
    <div className='bg-slate-900 min-h-screen'>
        <div className="p-6 ">
           <ImageSlider></ImageSlider>
        </div>

        <div className='grid grid-cols-3'>
            {games.map(game=><Game
                game={game}
                key={game.id}
            ></Game>)}
        </div>

    </div>
    );
};

export default Home;