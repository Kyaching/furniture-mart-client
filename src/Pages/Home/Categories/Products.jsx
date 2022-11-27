import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import Spinner from "../../../components/Spinner";
import Product from "./Product";

const Products = () => {
  const {name} = useParams();
  const [loading, setLoading] = useState(true);
  const {data: products} = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/products/${name}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.data.data;
      setLoading(false);
      return data;
    },
  });
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-center uppercase">
        {name} Categories
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          {products?.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
