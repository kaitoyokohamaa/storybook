import React from 'react'
import "./Input.css"
export default function Input(props) {
    const {size="medium",...rest}=props
    return (
        <Input className={`Input ${size}`} {...rest} />
    )
}
