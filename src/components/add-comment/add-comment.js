import { Button } from "../button";

import { DefaultInput } from "../default-input";
import { LigthtText } from "../light-text";
import { MediumTitle } from "../medium-title";
// import "./add-comment.css";

export const AddComment = () => {
  return (
    <div className="add-comment">
      <MediumTitle>Add Comment</MediumTitle>
      <DefaultInput text="Type your comment here" />
      <LigthtText>225 characters left</LigthtText>
      <Button className="addFeedbackBtn">Post Comment</Button>
    </div>
  );
};
