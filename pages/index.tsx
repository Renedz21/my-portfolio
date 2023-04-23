import About from '@/components/About'
import Announcement from '@/components/Announcement'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import { RevealWrapper } from 'next-reveal'
import React from 'react'

const Home = () => {
  return (
    <>
      <Announcement title='Esta página no esta completa al 100% pero es un resumen de mi vida, espero que les guste.' />
      <div className='container mx-auto'>
        <Navbar showNavs={true} />
        <Hero />
        <RevealWrapper>
          <About />
        </RevealWrapper>
        <Work />
        <RevealWrapper>
          <Projects />
        </RevealWrapper>
        <RevealWrapper>
          <Contact />
        </RevealWrapper>
      </div>
      <Announcement title='Hecho con ❤️, y bastante Typescript' />
    </>
  )
}

export default Home