import { useState } from "react";
import { Button } from "../button";

import { DefaultInput } from "../default-input";
import { LigthtText } from "../light-text";
import { SectionTitle } from "../section-title";
import "./add-comment.scss";

export const AddComment = () => {
  const [charactersLeft, setCharacters] = useState(225);

  const handleInputChange = (evt) => {
    setCharacters(225 - +evt.target.value.length);
    console.log(evt.target.value.length);
  };
  const handleInputPaste = (evt) => {
    evt.preventDefault();
  };
  const handleInputTyping = (evt) => {
    if (charactersLeft <= 0) {
      if (evt.code != "Delete") {
        evt.preventDefault();
      }
    }
  };

  return (
    <div className="add-comment">
      <SectionTitle>Add Comment</SectionTitle>
      <DefaultInput
        onChange={handleInputChange}
        onPaste={handleInputPaste}
        onKeyPress={handleInputTyping}
        text="Type your comment here"
      />
      <div className="add-comment__submit">
        <LigthtText>{charactersLeft} characters left</LigthtText>
        <Button className="addFeedbackBtn">Post Comment</Button>
      </div>
    </div>
  );
};
