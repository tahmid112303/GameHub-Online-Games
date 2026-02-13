import React from 'react';
import StarImage from '../assets/star.webp'
import { useLoaderData, useNavigate } from 'react-router';

const GameDetails = () => {

  const navigate=useNavigate();
  const gameData=useLoaderData()
    
  const {title,coverPhoto,ratings,developer,description}=gameData

    return (
<div className='my-21 mx-20'>
           <div className='flex gap-10'>
                <div className='w-75 h-75'>
                    <img className='w-75 h-75 rounded-2xl' src={coverPhoto} alt="" />
                </div>

                <div className='flex flex-col '>
                    <div className='flex flex-col'>
                       <span className='text-[32px] font-bold'>{title}</span>
                       <span className='text-[20px]'>Developed by <span className='text-[#632EE3]'>{developer}</span></span>
                    </div>

                    <div className='mt-10'>

                        <div className='w-37.5 h-30 flex flex-col gap-2 justify-center'>
                        <img className='h-10 w-10' src={StarImage} alt="" />
                            <h1>Average Ratings</h1>
                            <h1 className='text-[#001931] font-extrabold
                             text-[40px]'>{ratings}</h1>
                        </div>

                    </div>
                </div>
           </div>

           <h1 className='font-bold text-3xl mb-6 mt-6'>Description</h1>
           <p className='mb-6 text-[20px]'>{description}</p>

           <div onClick={()=>navigate(-1)} className='flex justify-center items-center'><button class="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-50 h-12.5 font-bold text-[20px] text-white">Go Back</button></div>

        </div>
    );
};

export default GameDetails;