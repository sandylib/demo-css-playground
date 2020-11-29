import React, {forwardRef} from 'react'
import cn from 'classnames';
import styles from './Input.module.css'

const Input = forwardRef( ( props, ref) => {
    const {id, name, label, type, value, disabled = false, onChange, error} = props;
    return (
        <>
         <label className={styles.label} htmlFor={id}>{label}</label>
         <input className={styles.input} ref={ref} id={id} name={name} type={type || 'text'} value={value}  disabled={disabled} onChange={ (e) => onChange(e)}/>
         {error &&  <p className={styles.errorMessage}>This field is required</p>}
        </>
    )
})

export default Input
