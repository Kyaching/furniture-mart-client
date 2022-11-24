import React from "react";
import {Link} from "react-router-dom";

const Category = ({category}) => {
  return (
    <Link to={`/products/${category.categoryName}`}>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.categoryName}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Category;
