import { Feedbackbar } from "../feedbackbar";
import "./article.css";
import { Feedback } from "../../../../components/feedback";
import { useSuggestions } from "../../../../hooks";
import { API_URL } from "../../../../consts";
import { useEffect } from "react";
import { Error } from "../../../../components";

export const Article = () => {
  const { suggestionsList, setSuggestions } = useSuggestions();

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
          setSuggestions(data);
          console.log(data);
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
        {suggestionsList?.map(
          ({
            id,
            title,
            description,
            type,
            commentsAmount,
            likes,
            comments,
          }) => {
            return (
              <li style={{ listStyle: "none" }} key={id}>
                <Feedback
                  id={id}
                  title={title}
                  description={description}
                  likes={likes}
                  type={type}
                  comments={comments}
                ></Feedback>
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
};
