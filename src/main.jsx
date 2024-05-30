import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { EzenseProvider } from "./context/ezenseProvider";
import Root from "./routes/root";
import Home from "./routes/home";
import Fiat from "./routes/fiat";
import ErrorPage from "./error-page";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "Fiat",
        element: <Fiat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <EzenseProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </EzenseProvider>,
);
