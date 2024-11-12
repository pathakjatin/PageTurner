import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Discover Your Next Adventure in Every Page</h1>
            <p className='mb-10'>Discover an endless library of books across every genre, from timeless classics to today’s bestsellers. Whether you're seeking adventure, knowledge, or inspiration, your next favorite read awaits you here. Dive into the stories that shape our world.</p>

            <button className='bg-primary p-3 hover:rounded-xl transition-all duration-300 ease-in-out'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner