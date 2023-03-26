import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Logo from '@/assets/Logo.png'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)

    const handleIsOpen = () => {
        setisOpen((prev) => !prev)
    }

    return (
        <nav className="relative bg-transparent dark:shadow-md">
            <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div className='my-auto'>
                        <Image src={Logo} className="w-auto h-10" alt="Logo" />
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
                        {navLinks.map((link) => (
                            <a key={link.title}
                                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-cyan-300 dark:hover:text-blue-400 md:mx-4 md:my-0" href={`#${link.id}`}
                                onClick={handleIsOpen}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div >
        </nav >
    )
}

export default Navbar