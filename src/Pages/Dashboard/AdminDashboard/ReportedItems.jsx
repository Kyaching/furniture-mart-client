import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const {data: products, refetch} = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/reports");
      const data = res.data.data;
      return data;
    },
  });

  const handleDelete = async id => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    console.log(res);
    toast.success("Delete success");
    refetch();
  };
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">All Sellers</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>role</th>
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
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.role}</td>
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
      </div>
    </div>
  );
};

export default ReportedItems;
