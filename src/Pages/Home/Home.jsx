import React from "react";
import TotalUsers from "../TotalUsers/TotalUsers";
import AdvertisedItems from "./AdvertisedItems/AdvertisedItems";
import Banner from "./Banner";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedItems />
      <Categories />
      <TotalUsers />
    </div>
  );
};

export default Home;
