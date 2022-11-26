import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import {Link} from "react-router-dom";

const MyOrders = () => {
  const {data: orders} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/bookings");
      const data = res.data.data;

      return data;
    },
  });
  // const handlePay = async product => {
  //   // const res = await axios.post(`http://localhost:5000/advertises`, product);
  //   // console.log(res);
  //   // if (res.data.status) {
  //   //   toast.success(res.data.message);
  //   // }
  // };
  return (
    <div className="m-4">
      <div className="overflow-x-auto w-full">
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
      </div>
    </div>
  );
};

export default MyOrders;
