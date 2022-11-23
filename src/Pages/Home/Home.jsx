import React from "react";
import AdvertisedItems from "./AdvertisedItems/AdvertisedItems";
import Banner from "./Banner";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedItems />
      <Categories />
    </div>
  );
};

export default Home;
