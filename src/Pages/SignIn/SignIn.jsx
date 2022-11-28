import React from "react";
import {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthProvider";
import {useForm} from "react-hook-form";
import useToken from "../../hooks/useToken";
import {useState} from "react";
import toast from "react-hot-toast";
import {ColorRing} from "react-loader-spinner";

const SignIn = () => {
  const {userLogin, signInWithGoogle} = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [signInError, setSignInError] = useState("");
  const [loading, setLoading] = useState(false);
  const [token] = useToken(userEmail);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, {replace: true});
  }

  const handleLogin = data => {
    setSignInError("");
    console.log(data);
    const {email, password} = data;
    userLogin(email, password)
      .then(result => {
        const user = result.user;
        setLoading(false);
        //get token
        if (user) {
          toast.success("Successfully Logged In");
          setUserEmail(email);
        }
      })
      .catch(err => {
        setSignInError(err.message);
      });
  };
  const googleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        setUserEmail(user.email);
        if (user) {
          toast.success("Successfully Logged In");
          setLoading(false);
        }
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <div className="card flex-shrink-0 w-full mx-auto mb-8 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <h2 className="text-3xl text-center font-semibold">Sign In</h2>

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
        {errors.email && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}
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
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <div>
            {signInError && <p className="text-red-600">{signInError}</p>}
          </div>
          <p className="text-sm pt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="link text-purple-700">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            {loading ? (
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64"]}
              />
            ) : (
              "Sign In"
            )}
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

export default SignIn;
