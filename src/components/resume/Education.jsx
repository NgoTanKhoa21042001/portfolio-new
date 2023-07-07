/* eslint-disable no-unused-vars */
import React from 'react'
import ResumeTitle from './ResumeTitle'
import { MdWork } from 'react-icons/md'
import ResumeCard from './ResumeCard'
import { GiGraduateCap } from 'react-icons/gi'
const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Experience' icon={<MdWork />} />
        <ResumeCard
          badge=''
          title='FE-Developer'
          subTitle='Facebook Inc'
          des='    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla velit eos molestiae magnam. Fugit assumenda
        deleniti maxime dolore veniam!'
        />
        <ResumeCard
          badge='2019 - 2024'
          title='FE-Developer'
          subTitle='Google Inc'
          des='    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla velit eos molestiae magnam. Fugit assumenda
        deleniti maxime dolore veniam!'
        />
        <ResumeCard
          badge='2019 - 2024'
          title='FE-Developer'
          subTitle='Google Inc'
          des='    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla velit eos molestiae magnam. Fugit assumenda
        deleniti maxime dolore veniam!'
        />
      </div>
      {/*  này là thanh dọc */}
      <div className='w-full h-full hidden lgl:flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-8 md:col-span-4 overflow-x-hidden'>
        <ResumeTitle title='Education' icon={<GiGraduateCap />} />
        <ResumeCard
          badge='2012 - 2014'
          title='North South University'
          subTitle='Dhaka'
          des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!'
        />
        <ResumeCard
          badge='2015 - 2016'
          title='Programming Course'
          subTitle='UK'
          des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!'
        />
        <ResumeCard
          badge='2018 - 2021'
          title='MERN Stack Developer'
          subTitle='Dhaka'
          des='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!'
        />
      </div>
    </div>
  )
}

export default Education
