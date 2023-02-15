import React from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menu = [
    'Общие',
    'Нотификации',
    'Редактор шаблонов',
    'Классификаторы',
    'Отображение для клиента',
];

export default function Header() {
    return (
        <>
            <div style={{
                gridColumn: '1 /span 12',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <div style={{
                    fontSize: '30px',
                    fontWeight: 600,
                    lineHeight: 1.33
                }}
                >Настройки нотификаций</div>


                <div style={{
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <input type="text" placeholder='Поиск клиентов по номеру и ФИО' id="inputID" style={{
                        minWidth: '250px',
                        marginRight: '20px',
                        borderRadius: '30px',
                        border: '0',
                        padding: '12px'
                    }} />

                    <div style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                    }}
                    >Джек Блэк<br />
                        Руководитель школы</div>
                    <AccountCircleIcon sx={{ fontSize: 50, color: '#999' }} />
                </div>
            </div>

            <div style={{
                marginTop: '10px',
                paddingBottom: '12px',
                gridColumn: '1 /span 12',
                display: 'flex',
                borderBottom: '1px solid #c8cace',

            }}>

                {menu.map((item) => (
                    <div style={{
                        marginRight: '20px',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'rgb(25, 34, 51)'
                    }}>{item}</div>
                ))}

            </div>
        </>
    )
}
