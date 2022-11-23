import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Products from "../Pages/Home/Categories/Products";
import Home from "../Pages/Home/Home";
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
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
