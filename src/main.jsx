import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./pages/apps/Apps";
import InstallApps from "./pages/installApps/InstallApps";
import HomePage from "./pages/homepage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/", or
        index: true,
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installedAppes",
        element: <InstallApps />,
      },
    ],
    errorElement: <NotFoundPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
