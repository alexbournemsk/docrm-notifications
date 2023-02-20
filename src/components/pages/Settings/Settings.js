import React from 'react';
import { drawerWidth } from '../../Navbar/styles';
import Header from '../../Header/Header';
import NotificationCard from '../../NotificationCard/NotificationCard';
import { notifications } from '../../../data/notifications.js'

const data = notifications;

export default function Settings() {
    return (
        <div style={{
            paddingLeft: drawerWidth + 20,
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingRight: '10px',
            width: '100%',
            minHeight: '100vh',
            display: 'grid',
            backgroundColor: 'rgb(227, 228, 230)',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gridTemplateColumns: 'repeat(12, 1fr)'

        }}>

            <Header />

            <div style={{ gridColumn: '1 /span 12' }}>
                {notifications.map((item) => {                    
                    return <NotificationCard data={item} key={item.id}/>;
                }
                    
                )}           
            </div>

        </div>
    )
}
