import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AllBuyers from "../Pages/Dashboard/AdminDashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AdminDashboard/AllSellers";
import ReportedItems from "../Pages/Dashboard/AdminDashboard/ReportedItems";
import MyOrders from "../Pages/Dashboard/BuyerDashBoard/MyOrders";
import Payment from "../Pages/Dashboard/BuyerDashBoard/Payment";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import Products from "../Pages/Home/Categories/Products";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:name",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/allsellers/:sellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers/:buyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({params}) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
