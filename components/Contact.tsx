import React, { useState } from 'react'
import Title from './Title'
import styles from '@/constants/style'
import ContactInfo from './ContactInfo'

const Contact = () => {

    const [formData, setFormData] = useState<{ name: string, email: string, message: string }>({
        name: '',
        email: '',
        message: ''
    })

    const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { name, email, message } = formData;

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <div id='contact' className='w-full'>

            <div className='flex gap-4 flex-col mb-10 md:mb-24'>
                <Title title='Contacto' />
                <ContactInfo email='edzonperez.castillo@gmail.com' phone='937167498' />
            </div>

            {!isFormSubmited ? (
                <form className={`${styles.flexCenter} flex-col gap-4 mt-4 w-full md:p-0 p-6`}>
                    <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                        <input type="text" placeholder='Your Name' className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                        <input type="email" placeholder='Your Email' className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                        <textarea placeholder='Your message' id="" className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
                            name="message"
                            value={message}
                            onChange={handleChange}
                            rows={5} />
                    </div>
                    <button
                        className='rounded-md bg bg-indigo-600 text-white px-28 py-4 md:mb-10 mb-5 w-full md:w-[400px]'
                        type='button'
                        onClick={handleSubmit}
                    >
                        {isFormSubmited ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            ) : (
                <div>
                    <h1 className='text-2xl text-center text-gray-300 mt-10 pb-4'>
                        Gracias por contactarme..!
                        <br />
                        Me pondre en contacto contigo lo mas pronto posible.
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Contact