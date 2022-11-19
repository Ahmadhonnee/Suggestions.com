import "./feedback-comments.css";
import { Comment } from "../comment";
import { SectionTitle } from "../section-title";
import { useSuggestions } from "../../hooks";
import { useParams } from "react-router-dom";
import { VerticalLine } from "../vertical-line";
import { Error } from "../error";
import { API_URL } from "../../consts";
import { useState } from "react";
import { useEffect } from "react";

export const FeedbackComments = () => {
  const { id } = useParams();
  const [currentFeedback, setCurrentFeedback] = useState();

  useEffect(() => {
    if (!currentFeedback) {
      fetch(`${API_URL}/${id}`)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => {
          setCurrentFeedback(data);
        });
    }
  }, []);

  const commentsAmount = currentFeedback?.comments.length;

  return (
    <div className="feedback-comments">
      <div className="comments-section">
        <SectionTitle>
          {!commentsAmount
            ? "No Comments :("
            : commentsAmount > 1
            ? `${commentsAmount} Comments`
            : `${commentsAmount} Comment`}
        </SectionTitle>
        <div className="feedback-comments-section">
          {currentFeedback?.comments.length ? (
            currentFeedback.comments?.map((comment) => {
              return (
                <>
                  <Comment comment={comment} key={comment.id} />
                  <VerticalLine />
                </>
              );
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </div>
  );
};
