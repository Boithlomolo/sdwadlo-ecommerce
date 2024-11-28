import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory';
import ShowCaseCategory from './ShowCaseCategory';
import Register from './Register';
import Locations from './Locations';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <ShowCaseCategory/>
        <Register/>
        <Locations/>
        <AboutUs/>
    </div>
  )
};

export default Home;
