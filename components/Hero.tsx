import { useState } from 'react'
import styles from '@/constants/style'

import Image from 'next/image'
import imagePerson from '@/assets/undraw_pair_programming_re_or4x.svg'

import FileSaver from 'file-saver'

const Hero = () => {

    const cvLink = 'https://my-personal-aws-bucket.s3.amazonaws.com/Curriculum.pdf'

    const [isLoading, setIsLoading] = useState(false)

    const handleDownload = (url: string) => {
        setIsLoading(true)

        fetch(url).then(response => {
            console.log(response);
            return response.blob();
        }).then(blob => {
            FileSaver.saveAs(blob, 'Curriculum.pdf');
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} md:my-7 my-2`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-col md:flex-row justify-between items-center  w-full text-white">
                    <div className='flex-1 leading-[50px] space-y-2 md:space-y-4'>
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
                            <button onClick={() => handleDownload(cvLink)} className='px-10 py-2 leading-9 font-semibold bg-teal-900 rounded'>
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