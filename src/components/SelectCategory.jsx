import React from 'react'

const SelectCategory = (select) => {
  return (
    <select>
        <option value="All">All Clothing</option>
        <option value="clothing">T-shirts</option>
        <option value="clothing">Pants</option>
        <option value="shoes">Shoes</option>
        <option value="accessories">Accessories</option>
        <option value="hats">Hats</option>
        <option value="bags">Bags</option>
    </select>
  );
};

export default SelectCategory;
