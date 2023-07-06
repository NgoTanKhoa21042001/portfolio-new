/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ServiceCard = ({ icons, title, subTitle }) => {
  return (
    <div className='py-8 flex flex-col items-center gap-2 borderRight borderBottom'>
      <span className='text-4xl text-designColor mb-2'>{icons}</span>
      <h2 className='font-titleFont text-lg font-semibold'>{title}</h2>
      <p className='text-base text-center text-zinc-400 px-6'>{subTitle}</p>
    </div>
  )
}

export default ServiceCard
