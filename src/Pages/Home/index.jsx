import Layout from '../../Components/Layout';
import React from 'react';

function Home() {
  return (
    <div>
       <div className="flex flex-col items-center justify-center p-30  ">
    <p className=" lg:px-16 text-2xl font-serif text-white drop-shadow-2xl text-justify mt-[-1100px] ">
      Welcome to the gateway to a world of wonders! Discover extraordinary destinations, immerse yourself in fascinating cultures and make your travel dreams come true. From the iconic monuments to the most remote corners, our site invites you to explore the wonders of the world and unleash your adventurous spirit. Are you ready to embark on an unforgettable journey?
    </p>
    <div className=''>
    <button className="bg-cyan-400/70 text-white font-bold text-xl px-4 py-2 rounded drop-shadow-2xl ">Start your journey here!</button>
    </div>
    </div>
   
    
  </div>
  
  )
}

export default Home

