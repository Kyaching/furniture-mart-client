import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import Modal from "../../../components/Modal";
import toast from "react-hot-toast";

const Product = ({product}) => {
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
          <div className="flex justify-between">
            <span className="text-xs font-medium text-blue-600 uppercase">
              {product.productName}
            </span>
            <div>
              <p>{product.location}</p>
            </div>
          </div>
          <Link className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline">
            {product.productName}
          </Link>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          <p>Original Price: ${product.originalPrice}</p>
          <p>Resale Price: ${product.resalePrice}</p>
          <p>Year of Use: {product.year}</p>
        </div>

        <div className="my-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <Link className="mx-2 font-semibold text-gray-700" role="link">
                Jone Doe
              </Link>
            </div>
            <span className="mx-1 text-xs text-gray-600">21 SEP 2015</span>
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
