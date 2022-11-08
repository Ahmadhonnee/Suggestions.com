import { useParams } from "react-router-dom";
import { suggestions } from "../../data/suggestions";
import { OpenedFeedbackDetail } from "../opened-feedback-detail/opened-feedback-detail";
import { Comment } from "../comment/comment";
import { SectionTitle } from "../section-title/section-title";
import "./feedback-comments.css";
import { Error } from "../error/error";

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
