import React, { FC, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Logo from '@/assets/Logo.png'
import Link from 'next/link'

interface NavbarProps {
    showNavs: boolean
}

const Navbar: FC<NavbarProps> = ({
    showNavs = true
}) => {

    const [isOpen, setisOpen] = useState(false)

    const handleIsOpen = () => {
        setisOpen((prev) => !prev)
    }

    return (
        <nav className="relative bg-transparent dark:shadow-md">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div className='my-auto'>
                        <Link href='/'>
                            <Image src={Logo} className="w-auto h-10" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button onClick={handleIsOpen} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-white ${isOpen ? 'hidden' : 'block'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-white ${isOpen ? 'block' : 'hidden'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`absolute inset-x-0 top-20 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#0e0722] dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        {showNavs === true ? (

                            <>
                                {navLinks.map((link) => (
                                    <a key={link.title}
                                        className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-cyan-300 dark:hover:text-blue-400 md:mx-4 md:my-0" href={`#${link.id}`}
                                        onClick={handleIsOpen}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </>
                        ) : (
                            <>
                                <Link href='/' className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-cyan-300 block md:hidden dark:hover:text-blue-400 md:mx-4 md:my-0" >
                                    Inicio
                                </Link>
                            </>
                        )}
                        <div className='md:hidden flex items-center gap-2'>
                            <Link href="https://github.com/Renedz21" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 cursor-pointer' fill='#ffffff'><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                            </Link>

                            <Link href='https://www.linkedin.com/in/edzon-perez-castillo-5342b1205/' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 cursor-pointer' fill='#ffffff'><path fillRule="evenodd" clipRule="evenodd" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='md:flex items-center gap-2 text-white hidden'>
                    <Link href="https://github.com/Renedz21" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 cursor-pointer' fill='#ffffff'><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    </Link>

                    <Link href='https://www.linkedin.com/in/edzon-perez-castillo-5342b1205/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 cursor-pointer' fill='#ffffff'><path fillRule="evenodd" clipRule="evenodd" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                    </Link>

                </div>
            </div >
        </nav >
    )
}

export default Navbar