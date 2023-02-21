import React from 'react'
import styles from '@/constants/style'

import Image from 'next/image'
import imagePerson from '@/assets/undraw_pair_programming_re_or4x.svg'

const Hero = () => {
    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-col md:flex-row justify-between items-center  w-full text-white">
                    <div className='flex-1 leading-[50px]'>
                        <span className='text-xl'>Hola! Mi nombre es,</span>
                        <h1 className="text-8xl md:text-7xl m-0 leading-none font-bold text-gradient">
                            Edzon Perez
                        </h1>
                        <p className='flex items-start justify-start flex-col w-auto space-y-4'>
                            <span className='text-xl mt-3 underline decoration-green-600 underline-offset-4 decoration-wavy'>Soy un Desarrollador FullStack</span>
                            <a href='#about' className='py-2 px-10 bg-[#24633d] font-bold text-lg flex items-center gap-2 leading-9 rounded-full'>
                                Conoceme
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </p>
                    </div>
                    <div className='w-[300px] md:w-auto mt-10 md:mt-0'>
                        <Image src={imagePerson} width={460} alt='Dev' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero