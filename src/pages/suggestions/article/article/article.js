import { Feedbackbar } from "../feedbackbar/feedbackbar";
import { Feedback } from "../feedbacks/feedback/feedback";
import { suggestions } from "../../../../data/suggestions";
import "./article.css";

console.log(suggestions);
export const Article = () => {
  return (
    <article className="article">
      <Feedbackbar></Feedbackbar>
      <ul className="article__feedbacks">
        {suggestions?.map(
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
