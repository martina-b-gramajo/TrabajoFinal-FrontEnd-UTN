import React from 'react'
import './Button.css'

const Button = ({ label, variant, onClick }) => {
    const classNames = 'btn-' + variant

    return (
        <button className={classNames} onClick={onClick}>{label}</button>
    )
}

export default Button
