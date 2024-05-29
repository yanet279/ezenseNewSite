import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EzenseProvider } from "./context/ezenseProvider";
import Root from "./routes/root";
import Home from "./routes/home";
import Fiat from "./routes/fiat";
import ErrorPage from "./error-page";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/ezenseSite3",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> },
      {
        path: "/ezenseSite3/fiat",
        element: <Fiat />,
      },
  ],
  },

  {
    path: "/fiat",
    element: <Fiat />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
