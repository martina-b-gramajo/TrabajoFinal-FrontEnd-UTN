import React from 'react'
import './Input.css'

const Input = ({ label, name, type, accept, placeholder, value, onChange }) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} accept={accept} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default Input