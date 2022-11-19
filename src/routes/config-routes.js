import { useRoutes } from "react-router-dom";
import { Error } from "../components";
import {
  LoginPage,
  Suggestions,
  FeedbackDetail,
  EditSuggestion,
  AddSuggestion,
} from "../pages";

const routes = [
  {
    path: "/",
    element: <Suggestions />,
  },
  {
    path: "/add",
    element: <AddSuggestion />,
  },
  {
    path: "/feedback/:id",
    children: [
      {
        path: "",
        element: <FeedbackDetail />,
      },
      {
        path: "edit",
        element: <EditSuggestion />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export const Routes = () => {
  const elements = useRoutes(routes);

  return elements;
};
