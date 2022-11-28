import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {buyers} = useParams();
  const {data: users, refetch} = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-sell-server.vercel.app/users?role=${buyers}`
      );
      const data = res.data.data;
      return data;
    },
  });

  const handleDelete = async id => {
    const res = await axios.delete(
      `https://e-sell-server.vercel.app/users/${id}`
    );
    if (res) {
      toast.success("Delete success");
    }
    refetch();
  };
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">All Buyers</h2>
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
            {users?.map(user => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllBuyers;
