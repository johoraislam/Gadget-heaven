import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Statistics from "./Pages/Statistics/Statistics";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("fakeData.json"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`fakeData.json?id=${params.id}`),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("fakeData.json"),
      },
    ],
  },
]);

export default router;
