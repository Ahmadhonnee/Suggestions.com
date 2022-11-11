import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LoginAuthContext } from "../../App";
import { suggestions } from "../../data";
import { Button } from "../button";
import "./feedback-detail-bar.css";

export const FeedbackDetailBar = () => {
  const { id } = useParams();
  const { loginAuth, setLoginAuth } = useContext(LoginAuthContext);

  const handleEditBtnClick = (evt) => {
    const id = +evt.target.dataset.id;

    const suggestionObj = suggestions.find(
      (suggestion) => suggestion.id === id
    );
    const { title, description, type } = suggestionObj;
  };

  return (
    <div className="feedback-detail-bar">
      <Button className="goback-btn" to={"/"}>
        <svg
          width="8"
          height="10"
          viewBox="0 0 8 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33398 9L2.33398 5L6.33398 1"
            stroke="#4661E6"
            stroke-width="2"
          />
        </svg>
        Go Back
      </Button>
      <Button
        style={{ textDecoration: "none" }}
        to={loginAuth ? "edit" : "/login"}
        onClick={handleEditBtnClick}
        dataId={id}
      >
        Edit Feedback
      </Button>
    </div>
  );
};
