"use client";

import Hero from "./Home/Hero/Hero";
import Apparment from "./Home/Apparment/Apparment";
import Properties from "./Home/Properties/Properties";
import CityProperty from "./Home/CityProperty/CityProperty";
// import BuildingFeature from './Home/BuildingFeature/BuildingFeature'
import Review from "./Home/Review/Review";
// import Blog from './Home/Blog/Blog'

import Handpicked from "./Handpicked/Handpicked";
import Highlight from "./Highlight/Highlight";
import Search from "./Search";
import Listcard from "./Sell/Listcard";
const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <Handpicked />
      <Properties />
      <Highlight />
      <CityProperty />
      <Apparment />
      {/* <BuildingFeature/> */}
      <Review />
      <Listcard />
      {/* <Blog/> */}
    </>
  );
};

export default Home;
