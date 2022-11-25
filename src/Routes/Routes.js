import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AllBuyers from "../Pages/Dashboard/AdminDashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AdminDashboard/AllSellers";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import Products from "../Pages/Home/Categories/Products";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
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
        element: <Products />,
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
    element: <DashboardLayout />,
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
        element: <AllSellers />,
      },
      {
        path: "/dashboard/allbuyers/:buyers",
        element: <AllBuyers />,
      },
    ],
  },
]);
