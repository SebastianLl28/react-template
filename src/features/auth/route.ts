import { LOGIN_PATH, PROFILE_PATH } from "@/app/route/path";
import type { RouteObject } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedLayout from "@/app/layouts/ProtectedLayout";

const authRoute: RouteObject[] = [
  {
    path: LOGIN_PATH,
    Component: LoginPage,
  },
  {
    Component: ProtectedLayout,
    children: [
      {
        path: PROFILE_PATH,
        Component: ProfilePage,
      },
    ],
  },
];

export default authRoute;
