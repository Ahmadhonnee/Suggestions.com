import { useParams } from "react-router-dom";
import { suggestions } from "../../data";
import { OpenedFeedbackDetail } from "../opened-feedback-detail";
import { Comment } from "../comment";
import { SectionTitle } from "../section-title";
import "./feedback-comments.css";
import { Error } from "../error";

export const FeedbackComments = () => {
  const { id } = useParams();

  const suggestionComment = suggestions.find(
    (suggestion) => suggestion.id === +id
  );

  if (!suggestionComment) {
    return <Error />;
  }

  return (
    <div className="feedback-comments">
      <OpenedFeedbackDetail suggestionComment={suggestionComment} />
      <div className="comments-section">
        <SectionTitle>4 Comments</SectionTitle>
        <Comment className="replied-comment">
          <Comment />
          <Comment />
          <Comment />
        </Comment>
      </div>
    </div>
  );
};
