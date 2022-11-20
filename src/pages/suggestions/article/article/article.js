import { Feedbackbar } from "../feedbackbar";
import "./article.css";
import { Feedback } from "../../../../components/feedback";
import { useSuggestions } from "../../../../hooks";
import { API_URL } from "../../../../consts";
import { useEffect } from "react";
import { Error } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { suggestionsActions } from "../../../../store/suggestions/suggestions.slice";

export const Article = () => {
  // const { suggestionsList, setSuggestions } = useSuggestions();
  const dispatch = useDispatch();

  const { suggestionsList } = useSelector((state) => state.suggestions);
  useEffect(() => {
    if (!suggestionsList) {
      fetch(API_URL)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => {
          dispatch(suggestionsActions.setSuggestions(data));
        })
        .catch(() => {
          console.log("Error");
        });
    }
  }, [suggestionsList]);

  if (!suggestionsList) {
    return <Error />;
  }
  return (
    <article className="article">
      <Feedbackbar></Feedbackbar>
      <ul className="article__feedbacks">
        {suggestionsList?.map((feedback) => {
          return (
            <li style={{ listStyle: "none" }} key={feedback.id}>
              <Feedback feedback={feedback}></Feedback>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
