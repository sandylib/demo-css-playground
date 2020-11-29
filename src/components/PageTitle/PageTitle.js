import React from 'react'
import styles from './PageTitle.module.css'

const PageTitle = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {children}
            </div>
        </div>
    )
}

export default PageTitle
