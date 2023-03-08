import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { buttonStyles } from './styles';




export default function FilterButton({ text, onClickHandler, children, isActive, isProgramNotification }) {
    const buttonClasses = isActive ? 'active' : undefined;


    return (
        <Tooltip title={isProgramNotification ? 'Уведомления учебных програм' : ''} placement='top'>
            <Button
                text={text}
                variant="outlined"
                size="small"
                onClick={onClickHandler}
                classes={{ root: buttonClasses }}
                sx={buttonStyles}

            >
                {children}

            </Button>
        </Tooltip>
    )
}
