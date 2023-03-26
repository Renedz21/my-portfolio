import styles from '@/constants/style'
import React from 'react'

import cloudImage from '@/assets/undraw_cloud_hosting_7xb1.svg'
import Image from 'next/image'
import Title from './Title'

const About = () => {
    return (
        <>
            <div id='about' className='md:my-24 my-0 w-full md:w-auto p-6 md:p-0'>

                <div className='flex flex-col items-center justify-center'>
                    <div className='w-full mb-4 md:mb-16'>
                        <Title title='Acerca de Mí' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-stretch items-center justify-center'>
                        <div className='mb-10 md:mb-0'>
                            <Image src={cloudImage} className='w-full h-[270px] md:h-[450px]' alt='cloud' />
                        </div>
                        <div className='text-justify text-white text-lg md:text-2xl'>
                            Soy un desarrollador Fullstack web autodidacta, me gusta aprender cosas nuevas e innovadoras que ayuden a la sociedad.
                            <br />
                            <br />
                            Apasionado por la tecnología, la programación y el diseño web.
                            <br />
                            <br />
                            Interesado en una compañia que me permita crecer profesionalmente y personalmente bajo un ambiente de trabajo colaborativo y dinámico.
                            <br />
                            <br />
                            Aprendiendo constantemente nuevas tecnologías y metodologías de desarrollo de software, con el fin de mejorar mis habilidades y conocimientos.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About