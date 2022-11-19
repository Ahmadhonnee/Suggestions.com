import { Button } from "../button";
import { LigthtText } from "../light-text";
import { MediumTitle } from "../medium-title";
import { Username } from "../username";
import "./comment.css";

export const Comment = ({ className = "", comment: { id, title } }) => {
  return (
    <div className="comment">
      <div className={"comment__img " + className}></div>
      <div className="comment__body">
        <div className="comment__top">
          <div className="comment__user">
            <MediumTitle>Elijah Moss</MediumTitle>
            <Username text={"@hexagon.bestagon"} />
          </div>
          <LigthtText>{title}</LigthtText>
        </div>
        <Button className="goback-btn reply-btn">Reply</Button>
      </div>
    </div>
  );
};
