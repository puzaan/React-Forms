import React from 'react'
import { Button as MuiButton } from '@material-ui/core'

const buttons = (props) => {
    const {text, size, color, variant, onClick, type} = props
    return (
        <MuiButton
                    size={size}
                    variant={variant}
                    type={type}
                    color={color}
                    onClick= {onClick}
                > 
{text}
                </MuiButton>
                
                
    )
}

export default buttons
