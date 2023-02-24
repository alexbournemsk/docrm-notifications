import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";

const Filter = ({ data, onFilter }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleNameChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(nameFilter.toLowerCase());
      const categoryMatch = !categoryFilter || item.category === categoryFilter;

      return nameMatch && categoryMatch;
    });

    onFilter(filteredData);
  };

  return (
    <div>
      <TextField label="Name" value={nameFilter} onChange={handleNameChange} />
      <Select value={categoryFilter} onChange={handleCategoryChange}>
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="food">Food</MenuItem>
        <MenuItem value="clothing">Clothing</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
      </Select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
