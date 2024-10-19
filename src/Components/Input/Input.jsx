import React from 'react'
import './Input.css'

const Input = ({ label, name, type, accept, onChange }) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} accept={accept} onChange={onChange} />
        </>

    )
}

export default Input