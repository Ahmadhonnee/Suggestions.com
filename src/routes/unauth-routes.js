import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages";

const unAuthRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export const UnAuthRoutes = () => {
  const elements = useRoutes(unAuthRoutes);

  return elements;
};
