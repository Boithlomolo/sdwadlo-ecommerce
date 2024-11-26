import React, { useState } from 'react';
import productData from "../products.json"
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
    const [filteredProducts, setfilteredProducts] =useState("");
    return <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input type="text" name="search" id="search" placeholder="Search your item"/>
                </form>
            </div>
        </div>

    </div>;

};

export default Banner;
