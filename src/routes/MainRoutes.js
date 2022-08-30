import React, { lazy } from "react";

//Project import
import Loadable from "../components/Loadable"; // Suspense Wrapper
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - utilities
const Onboarding = Loadable(lazy(() => import("../pages/onboarding")));
const Logged = Loadable(lazy(() => import("../pages/logged")));
const Signed = Loadable(lazy(() => import("../pages/signed")));
const Apikey = Loadable(lazy(() => import("../pages/apikey")));
const ApikeyForm = Loadable(lazy(() => import("../pages/apikey/form")));
const Question = Loadable(lazy(() => import("../pages/question")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/admin",
  element: <MainLayout />,
  children: [
    {
      path: "/admin",
      element: <DashboardDefault />,
    },
    {
      path: "onboarding",
      element: <Onboarding />,
    },
    {
      path: "logged",
      element: <Logged />,
    },
    {
      path: "signed",
      element: <Signed />,
    },
    {
      path: "apikey",
      children: [
        {
          path: "",
          element: <Apikey />,
        },
        {
          path: "create",
          element: <ApikeyForm />,
        },
      ],
    },
    {
      path: "questions",
      element: <Question />,
    },
  ],
};

export default MainRoutes;
