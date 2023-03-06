import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

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
        onClickHandler={filterReset}  isActive={activeFilter === ''}
      >
        Все
      </FilterButton>

      <FilterButton
        onClickHandler={handleFilter} isActive={activeFilter === 'system'}
      >
        Системные
      </FilterButton>

    </div>
  )
}
