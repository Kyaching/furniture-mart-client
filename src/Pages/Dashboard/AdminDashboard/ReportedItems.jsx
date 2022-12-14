import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import Spinner from "../../../components/Spinner";

const ReportedItems = () => {
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axios.get(`https://e-sell-server.vercel.app/reports`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.data.data;
      return data;
    },
  });

  const handleDelete = async id => {
    const res = await axios.delete(
      `https://e-sell-server.vercel.app/reports/${id}`
    );
    if (res) {
      toast.success("Delete success");
    }
    refetch();
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="text-3xl text-center font-bold">Reported Items</h2>
          <div className="overflow-x-auto w-full">
            {products?.length ? (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Description</th>
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
                                src={product.product.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{product.product.productName}</td>
                      <td>Very bad</td>
                      <th>
                        <Link>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="btn btn-primary btn-xs"
                          >
                            delete
                          </button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex justify-center items-center h-96">
                <h2 className="text-4xl font-semibold">
                  Oops!! No Products Found
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ReportedItems;
