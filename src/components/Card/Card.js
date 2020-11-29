import React from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

const CardView = ({
    theme ='red', 
    actionText = 'Do it now',
    title = 'Overdue payments',
    content ='You have two overdue payments,Would you like to pay those now?',
    actionOneStatus = 'disabled',
    actionOneText = 'Yes',
    actionOneOnClick,
    actionTwoStatus,
    actionTwoText = 'No',
    actionTwoOnClick,
    expired
}) => {
    return (
        <div className={cn(styles.card,  {
            [styles.red] : theme === 'red',
            [styles.orange] : theme === 'orange',
            [styles.blue] : theme === 'blue',
            [styles.expired] : expired
            })}>
            <div className={cn(styles.action )}>{actionText}</div>
            <div className={styles.title}><h3>{title}</h3></div>
            <div className={styles.content}>
                <p>{content}  </p>
            
            </div>

            <div className={styles.actionGroup}>
                <a href="#" onClick={actionOneStatus !== 'disabled' ? actionOneOnClick : undefined} className={cn(styles.button, {[styles.disabled]: actionOneStatus })}> {actionOneText}</a>
                <a href="#" onClick={actionTwoOnClick} className={cn(styles.button, styles.ml, {[styles.disabled]: actionTwoStatus })}>{actionTwoText}</a>
            </div>
        </div>
    )
}

export default CardView
