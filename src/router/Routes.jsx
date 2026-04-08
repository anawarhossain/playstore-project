import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";
import Dasboard from "../pages/dasboard/Dasboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // 2
    // hydrateFallbackElement: <div className="loading">Loading...</div>,
    children: [
      {
        // path: "/", or
        index: true,
        element: <HomePage />,
        // 2
        // loader: () => fetch("/data.json"),
      },
      {
        path: "apps",
        element: <Apps />,
        },
        {
          path: "/apps/:id",
          element: <AppDetails/>
      },
      {
        path: "installedApps",
        element: <InstallApps />,
      },
      {
        path: "dashboard",
        element: <Dasboard />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
