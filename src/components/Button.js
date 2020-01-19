import React from 'react'

const Button = ({children, disabled}) => {
    return (
        <button className='filled-btn' disabled={disabled}>{children}</button>
    )
}

export default Button