import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import Modal from "../../../components/Modal";
import Product from "./Product";

const Products = () => {
  const {name} = useParams();
  const {data: products} = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/products/${name}`);
      const data = res.data.data;
      return data;
    },
  });
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center">Name: Categories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        {products?.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Modal />
    </div>
  );
};

export default Products;
