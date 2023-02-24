import React from 'react';
import Header from '../../Header/Header';
import NotificationCard from '../../NotificationCard/NotificationCard';
import { notifications } from '../../../data/notifications.js'
import { settingsStyles } from './styles';

const data = notifications;

export default function Settings() {
    return (
        <div style={settingsStyles}>

            <Header pageTitle={'Настройка уведомлений'}/>

            <div style={{ gridColumn: '1 /span 12' }}>
                {notifications.map((item) => {                    
                    return <NotificationCard data={item} key={item.id}/>;
                }
                    
                )}           
            </div>

        </div>
    )
}
