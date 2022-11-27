import axios from "axios";
import React from "react";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const conditions = [{value: "Excellent"}, {value: "Good"}, {value: "Fair"}];
  const categories = [
    {value: "Living Room Furniture"},
    {value: "Kitchen Furniture"},
    {value: "Bedroom Furniture"},
  ];

  const handleAddProduct = data => {
    const {
      productName,
      originalPrice,
      resalePrice,
      number,
      productCategory,
      productCondition,
      year,
      description,
      location,
    } = data;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_KEY}`;

    axios({
      method: "post",
      url: url,
      data: formData,
    })
      .then(res => {
        if (res.data.success) {
          const time = new Date();

          const product = {
            userEmail: user.email,
            sellerName: user.name,
            productName,
            originalPrice,
            resalePrice,
            number,
            productCategory,
            productCondition,
            year,
            description,
            location,
            image: res.data.data.url,
            time,
          };

          //   save data to db
          axios({
            method: "post",
            url: "http://localhost:5000/products",
            data: product,
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="m-4">
      <h2 className="text-3xl text-center font-bold">Add a Product</h2>
      <div className="card  w-full shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                {...register("productName", {required: true})}
                type="text"
                placeholder="productName"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                {...register("originalPrice", {required: true})}
                type="text"
                placeholder="password"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                {...register("resalePrice", {required: true})}
                type="text"
                placeholder="productName"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                {...register("number", {required: true})}
                type="text"
                placeholder="password"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                {...register("location", {required: true})}
                type="text"
                placeholder="password"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                {...register("year", {required: true})}
                type="text"
                placeholder="password"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <label className="label">
                <span className="label-text">Product Condition?</span>
              </label>
              <select
                {...register("productCondition", {required: true})}
                className="select select-bordered w-full max-w-xs"
              >
                {conditions.map((condition, i) => (
                  <option key={i}>{condition.value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Product Category?</span>
              </label>
              <select
                {...register("productCategory", {required: true})}
                className="select select-bordered w-full max-w-xs"
              >
                {categories.map((Category, i) => (
                  <option key={i}>{Category.value}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <input {...register("image", {required: true})} type="file" />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {required: true})}
              className="textarea w-full textarea-bordered"
              placeholder="About your product"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full md:w-96 mx-auto">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
