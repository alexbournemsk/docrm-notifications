import React from 'react';
import { drawerWidth } from '../../Navbar/styles';
import Header from '../../Header/Header';
import NotificationCard from '../../NotificationCard/NotificationCard';


export default function Settings() {
    return (
        <div style={{
            paddingLeft: drawerWidth + 20,
            paddingTop: '20px',
            paddingRight: '10px',
            width: '100%',
            height: '100vh',
            display: 'grid',
            backgroundColor: 'rgb(227, 228, 230)',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr',
            gridTemplateColumns: 'repeat(12, 1fr)'

        }}>

            <Header />

            <div style={{gridColumn: '1 /span 12'}}>
                <NotificationCard />
            </div>



        </div>
    )
}
