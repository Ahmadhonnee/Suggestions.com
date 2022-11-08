import { useRoutes } from "react-router-dom";
import { AddSuggestion } from "../pages/add-suggestion/add-suggestion";
import { EditSuggestion } from "../pages/edit-suggestion/edit-suggestion";
import { FeedbackDetail } from "../pages/feedback-detail/feedback-detail";
import { Suggestions } from "../pages/suggestions/suggestions/suggestions";

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
];

export const Routes = () => {
  const elements = useRoutes(routes);

  return elements;
};
