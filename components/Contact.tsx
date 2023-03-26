import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Title from './Title'
import styles from '@/constants/style'
import ContactInfo from './ContactInfo'
import getInContact from '@/pages/api/contact'

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

    const handleSubmit = async (e: React.FormEvent<any>) => {

        setIsLoading(true)
        console.log(formData)

        const result = await getInContact(formData)

        console.log(result)

        if (result) {
            setIsLoading(false)
            setTimeout(() => {
                setIsFormSubmited(true)
            }, 2000);
            toast.success(result.message)
        }
    }

    return (
        <div id='contact' className='w-full h-auto'>
            <div className='flex gap-2 flex-col mb-4 md:mb-24'>
                <Title title='Contacto' />
                <ContactInfo email='edzonperez.castillo@gmail.com' phone='937167498' />
            </div>

            {!isFormSubmited ? (
                <>

                    <form className={`${styles.flexCenter} flex-col gap-4 mt-2 md:mt-4 w-full md:p-0 p-6`}>
                        <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                            <input type="text" placeholder='Tu Nombre' required className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                            <input type="email" placeholder='Tu email' required className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.flexStart} w-full md:w-[400px]`}>
                            <textarea placeholder='Tu Mensaje' required id="" className={`px-6 py-4 w-full border-none rounded-lg bg bg-indigo-100 placeholder:text-gray-800 focus:outline-none `}
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
                            {isLoading ? (
                                <div className='m-auto' role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : 'Enviar'}
                        </button>
                    </form>

                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        toastOptions={{
                            duration: 4000,
                        }}
                    />

                </>
            ) : (
                <div className="container mx-auto px-6 mb-6">
                    <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                        <div className="flex items-center gap-4">
                            <span className='text-xl'>💯</span>
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                                Muchas Gracias..!
                            </h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
                            Pronto me pondré en contacto contigo.
                            <span className='text-xl'>✨😀</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact