import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import Modal from "../../../components/Modal";
import toast from "react-hot-toast";
import {GoVerified} from "react-icons/go";

const Product = ({product, categoryName}) => {
  const handleReport = async () => {
    const res = await axios.post(`http://localhost:5000/reports`, {
      product,
    });
    if (res.data.status) {
      toast.success(res.data.message);
    }
  };
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
      <img
        className="object-cover w-full h-64"
        src={product.image}
        alt="Article"
      />

      <div className="p-6">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="mx-2 font-semibold text-gray-700" role="link">
                  {product?.sellerName}
                </p>
                {product?.verified && <GoVerified style={{color: "green"}} />}
              </div>
              <span className="mx-1 text-xs text-gray-600">{product.time}</span>
            </div>
            <p>{product.location}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors uppercase">
              {product.productName}
            </p>
            <p className="text-lg">Year of Use: {product.year}</p>
          </div>
          <p className="text-2xl text-green-500 font-semibold">
            Price: ${product.resalePrice}
          </p>
          <p className="text-sm text-gray-400 font-semibold">
            Original:{" "}
            <span className="line-through">${product.originalPrice}</span>
          </p>

          <div className="my-6">
            <p className="font-semibold text-lg">DESCRIPTION</p>
            <hr />
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          </div>
        </div>

        <label htmlFor="booking-modal" className="btn w-full">
          Book Now
        </label>
        <div
          onClick={handleReport}
          className="flex justify-end mt-4 hover:cursor-pointer"
        >
          <p className="text-red-500 text-semibold text-sm">
            Report the Product
          </p>
        </div>
      </div>
      <Modal product={product} />
    </div>
  );
};

export default Product;
