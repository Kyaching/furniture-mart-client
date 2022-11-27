import React from "react";
import {Link} from "react-router-dom";
import image from "../../../assets/bedroom.png";

const Category = ({category}) => {
  return (
    <Link
      to={`/products/${category.categoryName}`}
      className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="flex justify-between items-center m-4 ">
        <img className="w-24 h-24" src={image} alt="" />
        <p className="text-xl font-semibold text-white">
          {category.categoryName}
        </p>
      </div>
    </Link>
  );
};

export default Category;
