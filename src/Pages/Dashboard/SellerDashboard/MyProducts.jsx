import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React, {useState} from "react";
import {useContext} from "react";
import toast from "react-hot-toast";
import {AuthContext} from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const {user} = useContext(AuthContext);

  const {data: products, refetch} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-sell-server.vercel.app/products?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.data.data;
      console.log(data);
      return data;
    },
  });
  const handleAdvertise = async product => {
    const res = await axios.post(
      `https://e-sell-server.vercel.app/advertises`,
      product
    );
    console.log(res);
    if (res.data.status) {
      toast.success(res.data.message);
    }
  };
  const handleDelete = async id => {
    const res = await axios.delete(
      `https://e-sell-server.vercel.app/products/${id}`
    );
    if (res) {
      toast.success("Delete success");
    }
    refetch();
  };
  return (
    <div className="m-4">
      <div className="overflow-x-auto w-full">
        {products?.length ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>status</th>
                <th>Advertise</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products?.map(product => (
                <tr key={product._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.productName}</div>
                        <div className="text-sm opacity-50">{product.time}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.productCategory}
                    <br />
                  </td>
                  <td>${product.resalePrice}</td>
                  <td>
                    {product.paid ? (
                      <span className="text-green-500">Sold</span>
                    ) : (
                      "available"
                    )}
                  </td>
                  <td>
                    {product.advertise ? (
                      <span className="text-green-500">success</span>
                    ) : (
                      <button
                        onClick={() => handleAdvertise(product)}
                        className="btn btn-primary btn-xs"
                      >
                        advertise
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-primary btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center h-96">
            <h2 className="text-4xl font-semibold">Oops!! No Product Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
