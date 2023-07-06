/* eslint-disable no-unused-vars */
import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import { BsFacebook, BsCloudArrowDownFill, BsFillSendFill } from 'react-icons/bs'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { useTypewriter } from 'react-simple-typewriter'
const Left = () => {
  const [text] = useTypewriter({
    words: ['FE Developer'],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 4000
  })
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow'>
      <div className='w-full h-3/5'>
        <img className='w-full h-full object-cover rounded-2xl' src={bannerImg} alt='bannerImage' loading='priority' />
      </div>
      <div className='w-full h-2/5'>
        <div className='flex flex-col items-center gap-2 py-10'>
          <h1 className='text-textColor text-4xl font-semibold'>Ngo Tan Khoa</h1>
          <p className='text-base text-designColor tracking-wide'>{text}</p>
          <div className='flex justify-center gap-2 mt-2'>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <FaGithub />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <FaLinkedin />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <SiYoutubemusic />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <BsFacebook />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <FiInstagram />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <AiFillTwitterCircle />
            </span>
            <span className='hover:text-designColor duration-300 cursor-pointer text-xl'>
              <FiMail />
            </span>
          </div>
        </div>
        {/* Button */}
        <div className='flex h-14'>
          <a
            href=''
            target='_blank'
            className='w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300'
          >
            <button className='w-full h-full flex justify-center items-center gap-2'>
              Dowload CV <BsCloudArrowDownFill />
            </button>
          </a>
          <button className='w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase h-full flex justify-center items-center gap-2 hover:text-designColor duration-300'>
            CONTACT ME <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Left
