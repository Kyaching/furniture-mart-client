import React, {useContext} from "react";
import {InfinitySpin} from "react-loader-spinner";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import {useRole} from "../hooks/useRole";

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [role, isAdminLoading] = useRole(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/signin" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
