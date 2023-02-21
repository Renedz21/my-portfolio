import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home