import { Feedbackbar } from "../feedbackbar";
import "./article.css";
import { Feedback } from "../../../../components/feedback";
import { useContext } from "react";
import { SuggestionContext } from "../../../../App";

export const Article = () => {
  const { suggestionsList, setSuggestions } = useContext(SuggestionContext);

  return (
    <article className="article">
      <Feedbackbar></Feedbackbar>
      <ul className="article__feedbacks">
        {suggestionsList?.map(
          ({ id, title, description, type, commentsAmount, likes }) => {
            return (
              <li style={{ listStyle: "none" }}>
                <Feedback
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  likes={likes}
                  feedbackAmount={commentsAmount}
                  type={type}
                ></Feedback>
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
};
