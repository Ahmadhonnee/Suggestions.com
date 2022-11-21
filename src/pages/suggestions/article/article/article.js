import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../../components";
import { Feedback } from "../../../../components/feedback";
import { API_URL } from "../../../../consts";
import { suggestionsActions } from "../../../../store/suggestions/suggestions.slice";
import { Feedbackbar } from "../feedbackbar";
import "./article.css";

export const Article = () => {
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
  }, []);

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
