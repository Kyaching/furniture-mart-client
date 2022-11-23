import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-semibold text-center">
        Products categories
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
