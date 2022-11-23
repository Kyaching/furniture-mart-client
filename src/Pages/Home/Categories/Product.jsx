import React from "react";
import {Link} from "react-router-dom";

const Product = () => {
  return (
    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
      <img
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <div className="flex justify-between">
            <span class="text-xs font-medium text-blue-600 uppercase">
              Product
            </span>
            <div>
              <p>location</p>
            </div>
          </div>
          <Link
            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline"
            tabindex="0"
          >
            I Built A Successful Blog In One Year
          </Link>
          <p class="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
          <p>Original Price</p>
          <p>Resale Price</p>
          <p>Year of Use</p>
        </div>

        <div class="my-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <Link
                class="mx-2 font-semibold text-gray-700"
                tabindex="0"
                role="link"
              >
                Jone Doe
              </Link>
            </div>
            <span class="mx-1 text-xs text-gray-600">21 SEP 2015</span>
          </div>
        </div>
        <label htmlFor="booking-modal" className="btn w-full">
          Buy Now
        </label>
      </div>
    </div>
  );
};

export default Product;
