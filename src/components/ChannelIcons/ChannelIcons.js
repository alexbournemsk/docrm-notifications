import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';

export default function ChannelIcons() {
    return (
        <div style={{
            display: 'inline',
            position: 'relative',
        }}>
            <WhatsAppIcon sx={{
                color: 'green',
                pr: '5px',
            }} />
            <EmailIcon sx={{
                color: '#F6B445',
                pr: '5px',

            }} />
            <SmsIcon sx={{
                color: '#2196F3',
                position: 'absolute',
                top: '-5px',
                pr: '5px',

            }} />
        </div>
    )
}
