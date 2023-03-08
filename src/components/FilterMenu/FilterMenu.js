import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import { Tooltip } from '@mui/material';


export default function FilterMenu({ handleFilter, filterReset, activeFilter }) {
  return (
    <div
      style={{
        marginTop: '15px',
        marginBottom: '15px',
        display: 'flex',
        gap: '15px'
      }}
    >     

<FilterButton
        onClickHandler={filterReset}
        isActive={activeFilter === ''}
      >
        Все
      </FilterButton>

      <FilterButton
      sx={{fontWeight:'700'}}
        onClickHandler={() => handleFilter('system')}
        isActive={activeFilter === 'system'}
      >
        Системные
      </FilterButton>

      <FilterButton
        onClickHandler={() => handleFilter('вокал')}
        isActive={activeFilter === 'вокал'}
        isProgramNotification = 'true'
      >
        Вокал
      </FilterButton>

      <FilterButton
        onClickHandler={() => handleFilter('гитара')}
        isActive={activeFilter === 'гитара'}
        isProgramNotification = 'true'

      >
        Гитара
      </FilterButton>


      <FilterButton
        onClickHandler={() => handleFilter('фортепиано')}
        isActive={activeFilter === 'фортепиано'}
        isProgramNotification = 'true'

      >
        Фортепиано
      </FilterButton>

      <FilterButton
        onClickHandler={() => handleFilter('барабаны')}
        isActive={activeFilter === 'барабаны'}
        isProgramNotification = 'true'

      >
        Барабаны
      </FilterButton>

    </div>
  )
}
