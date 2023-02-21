import styles from '@/constants/style'
import React from 'react'

interface Props {
    title: string
}

const Title = ({ title }: { title: string }) => {
    return (
        <h1 className="text-center font-bold text-5xl text-white">
            {title}
        </h1>
    )
}

export default Title