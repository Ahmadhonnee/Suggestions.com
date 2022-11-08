import { Button } from "../button/button";
import { LigthtText } from "../light-text/light-text";
import { MediumTitle } from "../medium-title/medium-title";
import { Username } from "../username/username";
import "./comment.css";

export const Comment = ({ className = "", children }) => {
  return (
    <div className="comment">
      <div className={"comment__img " + className}></div>
      <div className="comment__body">
        <div className="comment__top">
          <div className="comment__user">
            <MediumTitle>Elijah Moss</MediumTitle>
            <Username text={"@hexagon.bestagon"} />
          </div>
          <Button className="goback-btn reply-btn">Reply</Button>
        </div>
        <LigthtText>
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </LigthtText>
        {children}
      </div>
    </div>
  );
};
