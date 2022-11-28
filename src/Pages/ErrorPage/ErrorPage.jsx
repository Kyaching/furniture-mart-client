import React from "react";
import {Link, useRouteError} from "react-router-dom";
import errorImage from "../../assets/error.webp";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img className="w-60 h-60 mx-auto" src={errorImage} alt="" />
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="text-xl text-red-500 mt-4 mb-8">
            {error.statusText || error.message}
          </p>
          <Link to="/" className="btn btn-error">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
