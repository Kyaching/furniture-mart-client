import React from "react";
// import Lottie from "lottie-react";
// import marketing from "../../assets/marketing.json";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold">Sell And Buy Furniture!!</h1>
          <h2 className="text-xl mt-6">
            WITH FURNITURE MART
            <span className="badge badge-lg ml-2">Easy Solution</span>
          </h2>
          <p className="py-6 text-lg">
            A online used furniture product selling market. Buy and sell product
            with furniture mart.
          </p>
        </div>
        <img
          className="w-full md:w-96"
          src="https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=740&t=st=1671608008~exp=1671608608~hmac=180f841eacace1a46660590ae45abac2ac3908f68069f7de6f78484bb88fdcd6"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
