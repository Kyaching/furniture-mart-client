import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import Spinner from "../components/Spinner";
import {AuthContext} from "../contexts/AuthProvider";
import {useRole} from "../hooks/useRole";

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [role, isAdminLoading] = useRole(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner />;
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
