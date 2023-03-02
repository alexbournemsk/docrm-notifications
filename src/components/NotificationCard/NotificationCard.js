import React from 'react';
import { FormControlLabel, Switch, Tooltip } from '@mui/material';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import ChannelIcons from '../ChannelIcons/ChannelIcons';
import { styles } from './styles_1.js';


export default function NotificationCard({ data }) {
    const [cardActive, cardSetActive] = useState(data.isActive);
    const handleClick = () => {
        cardSetActive(!cardActive);
    }
    const activeToggleStyle = cardActive ? styles.enabled : styles.disabled;
    return (
        <Paper
            sx={{
                mt: '20px',
                pt: '15px', pl: '35px', pr: '25px', pb: '1px',
                borderRadius: '12px',
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Tooltip title={cardActive ? 'Уведомление активно' : 'Уведомление выключено'} placement="top">
                    <FormControlLabel control={
                        <Switch
                            sx={{ ml: '5px' }}
                            checked={cardActive}
                            onClick={handleClick}
                            size='small'
                        />} label="" />
                </Tooltip>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </div>
            <div style={{
                ...activeToggleStyle
            }}>
                <div style={{ ...styles.cardHeader }}>{data.notificationHeader} </div>
                <div style={{ ...styles.cloudInfo }}>
                    <InfoIcon sx={{ color: '#bbb', fontSize: '16px' }} />
                    {data.notificationDescription}
                </div>


                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                }}>
                    <div style={{
                        display: 'flex',
                    }}>

                        В первый доступный канал: да

                    </div>

                    <div style={{
                        opacity: '50%',
                        fontWeight: 'normal',
                    }}>Сокращённый шаблон sms: нет</div>

                    <div>Тема для email: "Напоминание об уроке"
                    </div>
                </div> */}

                {/* <div style={{
                }}>Привязан шаблон:
                </div> */}

                {cardActive &&
                    <div style={{ ...styles.cloudMessage }}>

                        <Tooltip title='Шаблон, который привязан к уведомлению' placement='top-start'>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                }}>{data.templateHeader}
                            </div>
                        </Tooltip>

                        <div>
                            {data.templateText}
                        </div>

                        <Tooltip title='Waba ID' placement='left'>
                            <div style={{
                                fontSize: '9px',
                                color: '#aaa',
                                marginBottom: '20px'
                            }}>

                                {data.templateWabaID}
                            </div>
                        </Tooltip>
                        <ChannelIcons
                            iconsSize={'20px'}
                            sendToFirstAvailable={data.sendToFirstAvailable}
                            sendingChannels={data.sendingChannels} />

                    </div>
                }

            </div>
        </Paper>
    )
}
