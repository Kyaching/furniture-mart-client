import React from "react";
import {Link} from "react-router-dom";

const Category = () => {
  return (
    <Link to="/products">
      <div className="card w-96 mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </Link>
  );
};

export default Category;
