import styles from '@/constants/style'
import React from 'react'

interface Props {
    title: string
}

const Title = ({ title }: { title: string }) => {
    return (
        <h1 className={`${styles.title}`}>
            {title}
        </h1>
    )
}

export default Title