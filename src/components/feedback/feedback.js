import { useState } from "react";
import { Link } from "react-router-dom";
import { LightButton } from "..";
import "./feedback.css";

export const Feedback = ({
  suggestionComment: {
    id: commentID,
    title: commentTitle,
    description: commentDescription,
    type: commentType,
    likes: commentLikes,
    comments: commentComments,
  },
}) => {
  const [countLikes, setCountLikes] = useState(+commentLikes);

  const hendleBtnClick = () => {
    setCountLikes(countLikes + 1);
  };

  return (
    <div className="feedback">
      <LightButton onClick={hendleBtnClick}>
        <div className="feedback__btn">
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33447 6L5.33447 2L9.33447 6"
              stroke="#4661E6"
              strokeWidth="2"
            />
          </svg>
          <span className="feedback__btn__amount">{commentLikes || "."}</span>
        </div>
      </LightButton>
      <div className="feedback__text">
        <div className="feedback__text__container">
          <h3 className="feedback__text__title">
            <Link
              style={{ textDecoration: "none" }}
              to={`/feedback/${commentID}`}
            >
              {commentTitle || "."}
            </Link>
          </h3>
          <p className="feedback__text__desc">{commentDescription || "."}</p>
        </div>
        <LightButton>{commentType || "."}</LightButton>
      </div>
      <div className="feedback__comments">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
            fill="#CDD2EE"
          />
        </svg>
        {/* <span className="feedback__comments__amount">{comments.length}</span> */}
      </div>
    </div>
  );
};
