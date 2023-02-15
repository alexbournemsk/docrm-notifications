import React from 'react';
import { FormControlLabel, Grid, Switch } from '@mui/material';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';

const styles = {
    cardHeader: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 1.33
    }
}

export default function NotificationCard() {
    return (
        <Paper
            sx={{
                mt: '20px',
                pt: '35px',
                pl: '35px',
                pr: '25px',
                pb: '15px',
                borderRadius: '12px',
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <FormControlLabel control={<Switch defaultChecked />} label="" />
                <IconButton>
                    <EditIcon />
                </IconButton>
            </div>

            <div>
                <div style={styles.cardHeader}>Напоминание о регулярном уроке </div>
                <div style={{
                    backgroundColor: '#F1F5F6',
                    fontSize: '15px',
                    fontWeight: 'light',
                    lineHeight: 1.33,
                    marginTop: '20px',
                    marginBottom: '30px',
                    paddingTop: '10px',
                    paddingLeft: '15px',
                    paddingBottom: '10px',
                    borderRadius: '5px',
                }}>
                    Отправляется для регулярного урока в 15:00 дня, предшествующего уроку, или немного позднее, в режиме очереди.
                </div>

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

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        {/* <CheckCircleIcon sx={{
                    color: '#4bae4f',
                    pr: '5px',
                }} /> */}
                        В первый доступный канал: да

                    </div>

                    <div style={{
                        color: '#ccc',
                        fontWeight: 'normal',
                    }}>Сокращённый шаблон sms: нет</div>

                    <div>Тема для email: "Напоминание об уроке"
                    </div>
                </div>

                <div style={{
                    marginTop: '20px',
                }}>Привязан шаблон:
                </div>

                <div style={{
                    backgroundColor: '#F1F5F6',
                    fontSize: '15px',
                    fontWeight: 'light',
                    lineHeight: 1.73,
                    marginBottom: '30px',
                    paddingTop: '10px',
                    paddingLeft: '15px',
                    paddingBottom: '10px',
                    borderRadius: '5px',
                }}>

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
                        color: '#aaa'
                    }}>
                        notification_oferta_08_12_22
                    </div>
                </div>
            </div>
        </Paper>
    )
}
