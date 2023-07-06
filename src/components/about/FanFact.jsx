/* eslint-disable no-unused-vars */
import React from 'react'
import { BsTrophyFill } from 'react-icons/bs'
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { IoLogoYoutube } from 'react-icons/io'
import FunCard from './FunCard'

const FanFact = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
      <FunCard icon={<BsTrophyFill />} des='10 Awards Won' />
      <FunCard icon={<SiAntdesign />} des='20 Finished Projects' />
      <FunCard icon={<BiCodeAlt />} des='100 hours of coding' />
      <FunCard icon={<IoLogoYoutube />} des='1.5k Subscription' />
    </div>
  )
}

export default FanFact
