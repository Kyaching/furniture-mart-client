import React from "react";

const AddProduct = () => {
  const conditions = [{value: "Excellent"}, {value: "Good"}, {value: "Fair"}];
  const categories = [
    {value: "Living Room Furniture"},
    {value: "Kitchen Furniture"},
    {value: "Bedroom Furniture"},
  ];
  return (
    <div className="m-4">
      <h2 className="text-3xl text-center font-bold">Add a Product</h2>
      <div className="card  w-full shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="productName"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
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
              <select className="select select-bordered w-full max-w-xs">
                {conditions.map((condition, i) => (
                  <option key={i}>{condition.value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Product Category?</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                {categories.map((Category, i) => (
                  <option key={i}>{Category.value}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-span-3">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea w-full textarea-bordered w-full"
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
