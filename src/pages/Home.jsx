import React from 'react'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'

const Home = () => {
  return (
    <>
      <Intro />
      <Experience />
      <TechStack />
      <Projects />
    </>
  )
}

export default Home