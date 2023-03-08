import {React, useState} from 'react';
import Header from '../../components/Header/Header';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import { notifications } from '../../data/notifications.js'
import { settingsStyles } from './styles';
import FilterMenu from '../../components/FilterMenu/FilterMenu';


const data = notifications;

export default function Settings() {
    const [filteredData, setFilteredData] = useState(data);
    const [activeFilter, setActiveFilter] = useState('');

    const filterReset = () => {
        setFilteredData(data);
        setActiveFilter('');

    }
   
    const handleFilter = (category) => {
        if (activeFilter !== category) {
          const result = data.filter((item) => item.category === category);
          setFilteredData(result);
          setActiveFilter(category);
        }
      };

   

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
