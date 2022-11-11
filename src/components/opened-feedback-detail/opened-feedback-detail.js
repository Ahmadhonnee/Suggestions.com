import { Feedback } from "../feedback";
import "./opened-feedback-detail.css";

export const OpenedFeedbackDetail = ({
  suggestionComment: { id, title, description, type, commentsAmount, likes },
}) => {
  return (
    <ul className="opened-feedback-detail">
      <Feedback
        key={id}
        id={id}
        title={title}
        description={description}
        likes={likes}
        feedbackAmount={commentsAmount}
        type={type}
      ></Feedback>
    </ul>
  );
};
