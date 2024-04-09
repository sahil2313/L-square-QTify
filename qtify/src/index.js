import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import AlbumDetailsPage from "./pages/AlbumDetailsPage/AlbumDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/album/:albumSlug",
        element: <AlbumDetailsPage />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
