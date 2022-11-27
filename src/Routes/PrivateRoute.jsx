import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import {InfinitySpin} from "react-loader-spinner";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
