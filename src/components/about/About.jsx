/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../home/Title'
import AboutMe from './AboutMe'
import FanFact from './FanFact'
import MyService from './MyService'

const About = () => {
  return (
    <section id='about' className='w-full'>
      <Title title='About' subTitle='Me' />
      <AboutMe />
      <Title title='My' subTitle='Services' />
      <MyService />
      <Title title='Fun' subTitle='Fact' />
      <FanFact />
    </section>
  )
}

export default About
