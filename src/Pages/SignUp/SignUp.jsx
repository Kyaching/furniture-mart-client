import React from "react";
import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthProvider";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {createUser, profileUpdate, signInWithGoogle} = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);
  const roles = [{value: "buyer"}, {value: "seller"}];
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handleCreateUser = data => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        if (user) {
          updateProfile(data.name, data.email, data.role);
        }
      })
      .catch(err => console.error(err));
  };

  const updateProfile = (name, email, role) => {
    const profile = {
      displayName: name,
    };
    profileUpdate(profile)
      .then(() => {
        if (profile) {
          saveUser(name, email, role);

          console.log("update success");
        }
      })
      .catch(err => console.error(err.message));
  };
  const saveUser = async (name, email, role) => {
    const user = {
      name,
      email,
      role,
    };
    await axios({
      method: "post",
      data: user,
      headers: {
        "content-type": "application/json",
      },
      url: "http://localhost:5000/users",
    })
      .then(res => {
        setUserEmail(email);
      })
      .catch(err => console.log(err));
  };

  // google login
  const googleSignIn = () => {
    const userRole = {role: "buyer"};
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        if (user) {
          saveUser(user.displayName, user.email, userRole.role);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="card flex-shrink-0 w-full mx-auto mb-8 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">
        <h2 className="text-3xl text-center font-semibold">Sign Up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {required: true})}
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
            {...register("email", {required: true})}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {required: true})}
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
          />
          <select
            {...register("role")}
            className="select select-bordered w-full max-w-xs my-4"
          >
            {roles.map((role, i) => (
              <option key={i}>{role.value}</option>
            ))}
          </select>

          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="link text-purple-700">
              Sign In
            </Link>
          </p>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
      <div className="mx-3">
        <div className="flex items-center">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm">OR</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="mx-auto p-5">
        <button
          onClick={googleSignIn}
          aria-label="Login with Google"
          className="btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current mr-3"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
