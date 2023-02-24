import React from 'react';
import { headerStyles } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menu = [
    'Общие',
    'Уведомления',
    'Редактор шаблонов',
    'Классификаторы',
    'Отображение для клиента',
];

export default function Header({ pageTitle }) {
    return (
        <>
            <div style={headerStyles.top}>
                <div style={headerStyles.title}>{pageTitle}</div>

                <div style={headerStyles.searchAndProfile}>
                    <input
                        type="text"
                        placeholder='Поиск клиентов по номеру и ФИО'
                        id="inputID"
                        style={headerStyles.searchInput} />

                    <div style={headerStyles.profile}
                    >Джек Блэк<br />
                        Руководитель школы</div>
                    <AccountCircleIcon sx={{ fontSize: 50, color: '#999' }} />
                </div>
            </div>

            <div style={headerStyles.navigation}>

                {menu.map((item, index) => (
                    <div style={headerStyles.navigationItem}
                        key={index}
                    >{item}</div>
                ))}

            </div>
        </>
    )
}
