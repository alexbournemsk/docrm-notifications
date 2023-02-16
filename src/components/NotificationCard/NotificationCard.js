import React from 'react';
import { FormControlLabel, Grid, Switch } from '@mui/material';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import ChannelIcons from '../ChannelIcons/ChannelIcons';
import {styles} from '../NotificationCard/styles.js'


export default function NotificationCard() {
    const [cardActive, cardSetActive] = useState(1);
    const handleClick = () => {
        cardSetActive(!cardActive);
    }
    const activeToggleStyle = cardActive ? styles.enabled : styles.disabled;
    return (
        <Paper
            sx={{
                mt: '20px',
                pt: '35px', pl: '35px', pr: '25px', pb: '15px',
                borderRadius: '12px',
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <FormControlLabel control={<Switch defaultChecked onClick={handleClick} />} label="" />
                <IconButton>
                    <EditIcon />
                </IconButton>
            </div>

            <div style={{
                ...activeToggleStyle
            }}>
                <div style={{ ...styles.cardHeader }}>Напоминание о регулярном уроке </div>
                <div style={{ ...styles.cloudInfo }}>
                    <InfoIcon sx={{color: '#bbb', fontSize: '16px'}}/>
                    Отправляется для регулярного урока в 15:00 дня, предшествующего уроку, или немного позднее, в режиме очереди.
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

                <div style={{
                    marginTop: '20px',
                }}>Привязан шаблон:
                </div>

                <div style={{...styles.cloudMessage}}>

                    <div
                        style={{
                            fontWeight: 'bold',
                        }}>Напоминание об очередном уроке
                    </div>
                    <div>
                        Добрый день! Это Ольга, ваш куратор из школы музыки Guitardo😊 Пишу напомнить, что у вас занятие {`{date}`} в {`{time}`} на {`{lessonName}`} Если все верно, напишите «+» или любой смайлик🤍
                    </div>
                    <div style={{
                        fontSize: '9px',
                        color: '#aaa',
                        marginBottom:'10px'
                    }}>
                        notification_oferta_08_12_22
                    </div>
                    <ChannelIcons />

                </div>
            </div>
        </Paper>
    )
}
