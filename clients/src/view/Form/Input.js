import { TextField } from '@material-ui/core'
import React from 'react'


const Input = (props) => {
    const {name, label, value, onChange ,helperText, error = null ,placeholder, type} = props
    return (
        <TextField
                                    placeholder={placeholder}
                                    label = {label}
                                    variant="outlined"
                                    size="medium"
                                    name={name}
                                    fullWidth
                                    value={value}
                                    onChange = {onChange}
                                    type = {type}
                                    {...(error && {error: true,helperText:error})}
                                />
    )
}

export default Input
