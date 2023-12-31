/* eslint-disable no-unused-vars */
import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col pb-6'>
      <div className='w-full text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center'>
        <div className='py-6'>
          <h2 className='font-semibold mb-1'>Hello! I am Ngo Tan Khoa</h2>
          <p className='text-base leading-6 '>
            I just graduated from the University of Greenwich in IT and am looking for an opportunity to explore and
            develop myself in this field. I am passionate about technology and look forward to learning new knowledge to
            develop my skills.
          </p>
        </div>
      </div>
      <div className='w-full p-6'>
        <ul className='flex flex-col gap-1'>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Age:</span>
            24
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Residence:</span>
            USA
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Freelance:</span>
            Available
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan'>Address:</span>
            California, USA
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
