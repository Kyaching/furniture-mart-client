import React from "react";
import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import {useRole} from "../hooks/useRole";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [role] = useRole(user?.email);

  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {/* <div className="flex items-center justify-center">
            <h2 className="text-5xl font-bold">Welcome!! </h2>
            <span className="text-xl font-semibold text-green-700">
              {" "}
              {user?.displayName}{" "}
            </span>
          </div> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {/* If Admin */}
            {role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allsellers/seller">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers/buyer">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reports">Reported Items</Link>
                </li>
              </>
            )}

            {/* If Buyer */}
            {role === "buyer" && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {/* If Seller */}
            {role === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
