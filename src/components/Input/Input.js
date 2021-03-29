import React from 'react'
import { Form } from 'semantic-ui-react'

const Input = ({ name, handleChange, label, type, required, placeholder }) => {
    return (
        <Form.Input
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            label={label}
            type={type}
            focus
        />
    )
}

export default Input
