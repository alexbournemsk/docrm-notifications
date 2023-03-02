import React from 'react';
import { Button } from '@mui/material';

export default function FilterButtons({ handleFilter, filterReset }) {
  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleFilter}
        sx={{
          borderRadius: '40px',
          backgroundColor: '#c8cace66',
          fontSize: '12px',
          textTransform: 'none'

        }}
      >Фильтровать</Button>
      <Button variant="contained" onClick={filterReset}>Сброс</Button>

    </div>
  )
}
