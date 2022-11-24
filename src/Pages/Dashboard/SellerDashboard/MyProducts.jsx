import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const MyProducts = () => {
  const {data: products} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products");
      const data = res.data.data;
      console.log(data);
      return data;
    },
  });
  return (
    <div className="m-4">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>status</th>
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
                <td>available</td>
                <th>
                  <button className="btn btn-primary btn-xs">advertise</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
