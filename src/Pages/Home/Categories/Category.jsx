import React from "react";
import {Link} from "react-router-dom";

const Category = ({category}) => {
  return (
    <Link to={`/products/${category.categoryName}`}>
      <div className="w-96 h-96 mx-auto shadow-xl image-full relative">
        <img
          className="h-full transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-100"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
        <h2 className="absolute text-2xl bottom-2 text-white p-6">
          {category.categoryName}
        </h2>
      </div>
    </Link>
  );
};

export default Category;
