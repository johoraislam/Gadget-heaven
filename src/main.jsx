import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <div className="bg-gray-100 min-h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </div>
  </React.StrictMode>
);
