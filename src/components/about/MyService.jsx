/* eslint-disable no-unused-vars */
import React from 'react'
import ServiceCard from './ServiceCard'
import { BiCodeAlt } from 'react-icons/bi'
import { SiAntdesign } from 'react-icons/si'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { FaAppStoreIos } from 'react-icons/fa'
const MyService = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <ServiceCard
        icons={<BiCodeAlt />}
        title='Web Development'
        subTitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.'
      />
      <ServiceCard
        icons={<SiAntdesign />}
        title='Web Development'
        subTitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.'
      />
      <ServiceCard
        icons={<AiTwotoneAppstore />}
        title='Web Development'
        subTitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.'
      />
      <ServiceCard
        icons={<FaAppStoreIos />}
        title='Web Development'
        subTitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta.'
      />
    </div>
  )
}

export default MyService
