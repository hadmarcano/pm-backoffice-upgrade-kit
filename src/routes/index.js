import { useRoutes } from "react-router-dom";

// Project import
import LoginRoutes from "./LoginRoutes.js";
import MainRoutes from "./MainRoutes.js";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes, MainRoutes]);
}
