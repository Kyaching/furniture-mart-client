import React from "react";
import Lottie from "lottie-react";
import marketing from "../../assets/marketing.json";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold">Sell And Buy Furniture!!</h1>
          <h2 className="text-xl">
            WITH FURNITURE MART
            <span className="badge badge-lg">Easy Solution</span>
          </h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <Lottie className="w-full md:w-1/2" animationData={marketing} />
      </div>
    </div>
  );
};

export default Banner;
