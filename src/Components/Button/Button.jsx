import React from 'react'
import './Button.css'

const Button = ({ label, variant }) => {
    const classNames = 'btn-' + variant

    return (
        <button className={classNames}>{label}</button>
    )
}

export default Button
