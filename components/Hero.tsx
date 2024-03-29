import { useState } from 'react'
import styles from '@/constants/style'

import Image from 'next/image'
import imagePerson from '@/assets/undraw_pair_programming_re_or4x.svg'

import axios from 'axios'

const Hero = () => {

    //2058ff48-d4f2-4d50-bbe9-0c0602fd58a8
    const cvLink = 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-project-79fb8.appspot.com/o/2058ff48-d4f2-4d50-bbe9-0c0602fd58a8?alt=media&token=0aacfe89-1563-4f14-9cda-5fdb783e6b31'
    const [isLoading, setIsLoading] = useState(false)

    const handleDownload = (url: string) => {
        setIsLoading(true)
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = () => {
            const blob = xhr.response;
            console.log(blob)
            // hacer algo con el archivo descargado
        };
        xhr.open("GET", url);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        xhr.send();
    }

    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} md:my-7 my-2`}>
            <div className={`${styles.flexStart} flex-1 flex-col px-6 md:px-4`}>
                <div className="flex flex-col md:flex-row justify-between items-center  w-full text-white">
                    <div className='flex-1 leading-[50px] space-y-2 md:space-y-4 w-full'>
                        <span className='text-xl'>Hola! Mi nombre es,</span>
                        <h1 className="text-6xl md:text-7xl m-0 leading-none font-bold text-gradient">
                            Edzon Perez
                        </h1>
                        <span className='text-xl'>Soy un Desarrollador FullStack</span>
                        <div className='flex items-center justify-start gap-4'>
                            <a href='#about' className='py-2 px-10 bg-[#24633d] font-semibold text-lg flex items-center gap-2 leading-9 rounded'>
                                Conoceme
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon md:block hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                            <button onClick={() => handleDownload(cvLink)} className='px-10 py-2 hidden leading-9 font-semibold bg-teal-900 rounded'>
                                {isLoading ? 'Descargando...' : 'Descargar CV'}
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px] md:w-auto mt-10 md:mt-0 hidden md:block'>
                        <Image src={imagePerson} width={460} alt='Dev' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero