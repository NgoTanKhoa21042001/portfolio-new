/* eslint-disable no-unused-vars */
import React from 'react'
import ResumeTitle from './ResumeTitle'
import { SiArtstation } from 'react-icons/si'
import { FaFlag } from 'react-icons/fa'
import { AiFillTool } from 'react-icons/ai'
import { RiEnglishInput } from 'react-icons/ri'
import { BiCodeAlt } from 'react-icons/bi'
import { IoIosPaper } from 'react-icons/io'
import { GiCheckMark } from 'react-icons/gi'
const Skills = () => {
  return (
    <div className='w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6'>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Web Front-end Technologies' icon={<SiArtstation />} />
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>HTML5, CSS3, JavaScript (ReactJS)</p>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Styled Components, TailwindCss, Sass,</p>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Webpack, Axios, Vite</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full hidden lgl:flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Web Back-end Technologies ' icon={<FaFlag />} />
        {/* English */}
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>REST, HTTP(S), Vercel</p>
          </div>
          {/* Hindi */}
        </div>
      </div>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Dev Tools' icon={<AiFillTool />} />
        {/* English */}
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              Git, Postman, React Developer Tool, Redux Dev Tool, React Query Dev Tool, Github, Figma, VS Code, Bash
            </p>
          </div>
          {/* Hindi */}
        </div>
      </div>
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Languages' icon={<RiEnglishInput />} />
        {/* English */}
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>English</p>
          </div>
          {/* Hindi */}
        </div>
      </div>
    </div>
  )
}

export default Skills
