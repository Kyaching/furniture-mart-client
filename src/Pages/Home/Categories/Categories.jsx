import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const {data: categories} = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/categories");
      const data = res?.data?.data;
      return data;
    },
  });
  return (
    <div className="my-10">
      <h2 className="text-3xl font-semibold text-center">CHOOSE CATEGORIES</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        {categories?.map(category => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
