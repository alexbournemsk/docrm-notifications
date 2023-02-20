import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import { Tooltip } from '@mui/material';

export default function ChannelIcons({ sendToFirstAvailable, sendingChannels, iconsSize }) {
    return (
        <div style={{
            display: 'inline',
            position: 'relative',
        }}>
            {sendingChannels[0] &&
                <Tooltip title='Whatsapp' >
                    <WhatsAppIcon sx={{
                        fontSize: iconsSize,
                        color: 'green',
                        pr: '5px',
                    }} />
                </Tooltip>
            }

            {sendingChannels[1] &&
                <Tooltip title='Email'>
                    <EmailIcon sx={{
                        fontSize: iconsSize,
                        color: '#F6B445',
                        pr: '6px',

                    }} />
                </Tooltip>
            }

            {sendingChannels[2] &&
                <Tooltip title='SMS'>
                    <SmsIcon sx={{
                        fontSize: iconsSize,
                        color: '#2196F3',
                        position: 'absolute',
                        top: '-4px',  
                        pr: '5px',    
                    }} />
                </Tooltip>
            }

            <Tooltip title={sendToFirstAvailable ? `Сообщение будет отправлено в первый доступный канал` : `Сообщение будет отправлено во все доступные из перечисленных каналов`} placement='top-start'>
                <div style={{
                    color: '#888',
                    fontSize: '10px',
                }}

                >{sendToFirstAvailable ? 'В первый доступный канал' : 'Во все каналы'}</div>
            </Tooltip>
        </div>
    )
}
