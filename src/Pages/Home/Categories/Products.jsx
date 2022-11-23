import React from "react";
import Modal from "../../../components/Modal";
import Product from "./Product";

const Products = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center">Name: Categories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <Modal />
    </div>
  );
};

export default Products;
