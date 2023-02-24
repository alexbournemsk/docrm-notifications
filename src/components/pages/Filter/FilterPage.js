import React, { useState } from "react";
import Header from '../../Header/Header';
import { drawerWidth } from '../../Navbar/styles';
import { data } from '../../consts/data';
import Filter from '../../Filter/Filter.js';
import FilterTable from '../../FilterTable/FilterTable';


export default function FilterPage() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  }

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

      <Header pageTitle={'Фильтр'} />

      <div style={{ gridColumn: '1 /span 12' }}>
        <Filter data={data} onFilter={handleFilter}/>

        <FilterTable data={filteredData} />


      </div>

    </div>
  )
}
