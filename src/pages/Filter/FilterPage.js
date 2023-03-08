import React, { useState } from "react";
import Header from '../../components/Header/Header';
import { data } from '../../consts/data';
import Filter from '../../components/Filter/Filter';
import FilterTable from '../../components/FilterTable/FilterTable';
import { filterPagesStyles } from './styles';


export default function FilterPage() {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  }

  return (
    <div style={filterPagesStyles}>

      <Header pageTitle={'Фильтр'} />

      <div style={{ gridColumn: '1 /span 12' }}>
        <Filter data={data} onFilter={handleFilter}/>
        <FilterTable data={filteredData} />


      </div>

    </div>
  )
}
