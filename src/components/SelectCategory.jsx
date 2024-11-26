import React from 'react'

const SelectCategory = (select) => {
  return (
    <select>
        <option value="All">All Categories</option>
        <option value="clothing">Clothing</option>
        <option value="shoes">Shoes</option>
        <option value="accessories">Accessories</option>
        <option value="hats">Hats</option>
        <option value="bags">Bags</option>
    </select>
  );
};

export default SelectCategory;
