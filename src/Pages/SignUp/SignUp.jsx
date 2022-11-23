import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div className="card flex-shrink-0 w-full mx-auto mb-8 max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your mail"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <select className="select select-bordered w-full max-w-xs my-4">
            <option selected>Buyer</option>
            <option>Seller</option>
          </select>

          <p className="text-sm pt-2">
            Already have an account?{" "}
            <Link to="/login" className="link text-purple-700">
              Sign In
            </Link>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
