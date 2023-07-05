/* eslint-disable no-unused-vars */
import React from 'react'
import Left from './components/Home/Left'
import Right from './components/home/Right'

const Home = () => {
  return (
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
      <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
        <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'>
          {/* Home icons */}
          <div className='flex flex-col items-center gap-1.5'>
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
            <span className='w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300'></span>
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor'></span>
          </div>
        </div>
        {/* Other icon */}
        <div className='w-full h-96 bg-bodyColor rounded-3xl py-6'></div>
      </div>
      <div className='w-[94%] h-full bg-transparent flex items-center'>
        {/* Left part start */}
        <Left />
        {/* Right part start */}
        <div className='w-8/12 h-[95%] bg-bodyColor'>
          <Right />
        </div>
      </div>
    </div>
  )
}

export default Home
