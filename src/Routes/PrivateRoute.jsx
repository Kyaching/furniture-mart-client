import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import Spinner from "../components/Spinner";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (!user?.uid && loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
