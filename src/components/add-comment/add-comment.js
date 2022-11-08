import { Button } from "../button/button";
import { CommentTitle } from "../comment-title/comment-title";
import { DefaultInput } from "../default-input/default-input";
import { LigthtText } from "../light-text/light-text";
import "./add-comment.css";

export const AddComment = () => {
  return (
    <div className="add-comment">
      <CommentTitle name={"Add Comment"} />
      <DefaultInput text="Type your comment here" />
      <LigthtText>225 characters left</LigthtText>
      <Button className="addFeedbackBtn">Post Comment</Button>
    </div>
  );
};
