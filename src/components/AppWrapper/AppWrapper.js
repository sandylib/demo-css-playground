import React from 'react'
import cn from 'classnames'
import styles from './AppWrapper.module.css'
const AppWrapper = ({children, size='sm'}) => {
    return (
        <div className={cn(styles.container, {[styles.sm] : size === 'sm', [styles.md]: size=== 'md', [styles.lg]: size==='lg'})}>
            {children}
        </div>
    )
}

export default AppWrapper
