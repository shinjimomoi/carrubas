import React from 'react';
import Navbar from "./navbar";


const Banner = () => {
  return (
    <div className='background'>
      <Navbar />
      <div className='banner'>
        <h1 className='title'>Enjoy delicious <span className='yellow'>food</span> <br /> and good <span className='yellow'>beers</span></h1>
      </div>
    </div>
  )
}

export default Banner;
