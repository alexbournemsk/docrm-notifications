import {React, useState} from 'react';
import Header from '../../Header/Header';
import NotificationCard from '../../NotificationCard/NotificationCard';
import { notifications } from '../../../data/notifications.js'
import { settingsStyles } from './styles';
import FilterMenu from '../../FilterMenu/FilterMenu';


const data = notifications;

export default function Settings() {
    const [filteredData, setFilteredData] = useState(data);
    const [activeFilter, setActiveFilter] = useState('');

    const handleFilter = () => {
        const result = filteredData.filter(item => item.category === 'system');
        setFilteredData(result);
        setActiveFilter('system');
    }

    const filterReset = () => {
        setFilteredData(data);
        setActiveFilter('');

    }

    return (
        <div style={settingsStyles}>

            <Header pageTitle={'Настройка уведомлений'}/>
            
            <FilterMenu handleFilter = {handleFilter} filterReset={filterReset} activeFilter ={activeFilter}/>
            <div style={{ gridColumn: '1 /span 12' }}>
                {filteredData.map((item) => {                    
                    return <NotificationCard data={item} key={item.id}/>;
                }
                    
                )}           
            </div>

        </div>
    )
}
