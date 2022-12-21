import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import Spinner from "../../../components/Spinner";
import {AuthContext} from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const {user} = useContext(AuthContext);

  const {data: orders, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-sell-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.data.data;

      return data;
    },
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="m-4">
          <div className="overflow-x-auto w-full">
            {orders?.length ? (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map(order => (
                    <tr key={order._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={order.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {order.productTitle}
                        <br />
                      </td>
                      <td>${order.price}</td>

                      <th>
                        {order?.paid ? (
                          <span className="text-green-600">Paid</span>
                        ) : (
                          <Link
                            to={`/dashboard/payment/${order._id}`}
                            className="btn btn-primary btn-xs"
                          >
                            Pay
                          </Link>
                        )}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex md:mr-32 justify-center items-center h-96">
                <h2 className="text-4xl font-semibold">
                  Sorry!! You have no order
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
