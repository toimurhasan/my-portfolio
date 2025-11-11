import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import { Maintenance } from "./pages/Maintenance";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Component: RootLayout,
  //   children: [
  //     {
  //       index: true,
  //       Component: Home,
  //     },
  //   ],
  // },
  {
    path: "/",
    Component: Maintenance,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
