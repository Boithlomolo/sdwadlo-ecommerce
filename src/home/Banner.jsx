import React, { useState } from 'react';
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectCategory from '../components/SelectCategory';
const title = <h2>Search Your One From <span>Thousand</span> of Products</h2>;
const desc = "We have the largest collection of products";
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More than 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy any clothing item online",
    },
];
const Banner = () => {
    const [searchInput, setSearchInput] =useState("");
    const [filteredProducts, setfilteredProducts] =useState(productData);
    // console.log(productData)
    //search function
    const handleSearch=e=>{
        const searchTerm=e.target.value;
        setSearchInput(searchTerm);

        //filtering items based on search
        const filtered =productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setfilteredProducts(filtered);
    }

    return <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <SelectCategory select={"all"}/>
                    <input type="text" name="search" id="search" placeholder="Search your item" value={searchInput} onChange={handleSearch}/>
                    <button type="submit">
                        <i className="icofont-search"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className="lab-ul">
                    {
                        searchInput && filteredProducts.map((product, i)=><li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>

    </div>;

};

export default Banner;
