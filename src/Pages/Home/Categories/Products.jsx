import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import Modal from "../../../components/Modal";
import Spinner from "../../../components/Spinner";
import Product from "./Product";

const Products = () => {
  const {name} = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const {data: products} = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-sell-server.vercel.app/products/${name}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
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
        <>
          {products.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
              {products?.map(product => (
                <Product
                  key={product._id}
                  product={product}
                  setProductInfo={setProductInfo}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-96">
              <h2 className="text-4xl font-semibold">
                Oops!! No Product Found
              </h2>
            </div>
          )}
        </>
      )}
      {productInfo && <Modal productInfo={productInfo} />}
    </div>
  );
};

export default Products;
