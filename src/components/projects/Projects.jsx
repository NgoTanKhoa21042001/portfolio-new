/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../home/Title'
import ProjectCard from './ProjectCard'
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight
} from '../../assets'
const Projects = () => {
  return (
    <>
      <Title title='Recent' subTitle='Projects' />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10'>
        <div className='px-6'>
          <ProjectCard title='Blog Website' category='Website' image={workImgThree} />
          <ProjectCard title='Business Card Design' category='Design' image={workImgOne} />
          <ProjectCard title='Infinity Logo' category='Logo' image={workImgTwo} />
          <ProjectCard title='Mobile Application' category='Shopping' image={workImgFive} />
        </div>
        <div className='px-6'>
          <ProjectCard title='Responsive website' category='E-commerce' image={workImgFour} />
          <ProjectCard title='Grapic Design' category='Design' image={workImgSix} />
          <ProjectCard title='Ideas & Blog' category='Website' image={workImgEight} />
          <ProjectCard title='ZOSS Logo' category='Logo' image={workImgSeven} />
        </div>
      </div>
    </>
  )
}

export default Projects
