import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Logo from '@/assets/Logo.png'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)
    const [isActive, setisActive] = useState("Home")

    const handleIsOpen = () => {
        setisOpen((prev) => !prev)
    }

    return (

        <nav className="mb-12">
            <div className="container px-6 py-7 mx-auto md:px-0 md:flex md:justify-between md:items-center relative">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <Image src={Logo} alt='logo' className='w-auto h-8 sm:h-10' />
                        {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                    </a>

                    <div className="flex lg:hidden">
                        <button onClick={handleIsOpen} type="button" className="text-gray-300 dark:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-linear dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col space-y-2 md:flex-row md:mx-6 md:space-y-0">
                        {navLinks.map((link) => (
                            <li key={link.id} onClick={() => setisActive(link.title)}>
                                <a
                                    className={`my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-cyan-500 dark:hover:text-blue-400 md:mx-4 md:my-0 ${isActive === link.title ? 'text-cyan-600' : ''}`}
                                    href={`#${link.id}`}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </nav >

    )
}

export default Navbar