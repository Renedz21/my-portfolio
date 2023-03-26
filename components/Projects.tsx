import { useState, useEffect } from 'react'
import styles from '@/constants/style'
import Image from 'next/image'

import image from '@/assets/original-c2a840d4dd432fd4b0d2390552a8b60a.webp'
import Title from './Title'
import Link from 'next/link'

type ProjectProps = {
    _id: string,
    title: string,
    description: string,
    image: string,
    githubUrl: string,
    webUrl: string
}

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const response = fetch(`/api/project`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })

        console.log(projects)

    }, [])

    return (
        <>
            <div id='projects' className='w-full'>
                <div className='flex flex-col flex-1'>
                    <Title title='Proyectos' />
                    <div className='flex flex-wrap justify-center items-center mx-auto'>
                        {/* map */}
                        {projects.map((project: ProjectProps) => (
                            <Link href={`project/${project._id}`} key={project._id} className='w-full md:w-[270px] flex items-center justify-center flex-col m-4 p-5 md:m-8 md:p-4 rounded-lg bg-white text-[#000] cursor-pointer transition-all ease-linear duration-300 hover:scale-105'>
                                <div className='w-full h-[230px] relative flex items-center justify-center'>
                                    <Image src={image} alt='alt' className='w-full h-full object-cover rounded-lg' />
                                    <div className=' absolute inset-0 w-full h-full  hover:bg-[#00000080] rounded-lg opacity-0 hover:opacity-100 transition-all duration-300 ease-linear flex items-center justify-center gap-4'>
                                        <Link href={project.githubUrl} rel='noreferrer'>
                                            <div className='flex items-center justify-center bg bg-white rounded-full p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>

                                            </div>
                                        </Link>
                                        <Link href={project.webUrl} rel='noreferrer'>
                                            <div className='flex items-center justify-center bg bg-white rounded-full p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='mt-3 space-y-2 text-center'>
                                    <h1 className='text-xl font-bold text-gray-800'>Title</h1>
                                    <p className='text-gray-600'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects