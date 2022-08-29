import { lazy } from "react";

// Project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// Render - login
const AuthLogin = Loadable(
  lazy(() => import("../pages/authentication/Login.js"))
);

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
  ],
};

export default LoginRoutes;
