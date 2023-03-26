import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import { RevealWrapper } from 'next-reveal'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <RevealWrapper>
        <About />
      </RevealWrapper>
      <Work />
      <RevealWrapper reset={true}>
        <Projects />
      </RevealWrapper>
      <Contact />
    </div>
  )
}

export default Home