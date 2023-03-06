import React from 'react';
import { Button } from '@mui/material';
import { buttonStyles } from './styles';




export default function FilterButton({ text, onClickHandler, children, isActive }) {
    const buttonClasses = isActive ? 'active' : undefined;

 
    return (
        <Button
            text={text}
            variant="outlined"
            size="small"
            onClick={onClickHandler}
            // sx={{ ...buttonStyles, ...activeStyles }}
            classes={{ root: buttonClasses }}
            sx={buttonStyles}
            
            >
            {children}

        </Button>)
}
