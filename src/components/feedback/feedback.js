import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LightButton } from "..";
import { API_URL } from "../../consts";
import { suggestionsActions } from "../../store/suggestions/suggestions.slice";
import "./feedback.scss";

export const Feedback = ({ feedback }) => {
  const dispatch = useDispatch();
  const { suggestionsList } = useSelector((state) => state.suggestions);
  const [isLikeBtnClicked, setLikeBtnCkick] = useState(null);
  const [isLikeClicking, setLikeClicking] = useState(false);

  if (!feedback) {
    return null;
  }
  const {
    id: feedbackID,
    title: feedbackTitle,
    description: feedbackDescription,
    likes: feedbackLikes,
    isLiked: feedbackIsLiked,
    type: feedbackType,
    comments: feedbackComments,
  } = feedback;
  setLikeBtnCkick(feedbackIsLiked);

  const hendleBtnClick = (evt) => {
    setLikeBtnCkick(!isLikeBtnClicked);

    const likedFeedback = feedback;
    likedFeedback.isLiked = isLikeBtnClicked;

    const id = evt.target.parentElement.dataset.id;
    setLikeClicking(true);
    fetch(API_URL + "/" + id, {
      method: "PUT",
      body: JSON.stringify(likedFeedback),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        if (suggestionsList) {
          const likedSuggestionIndex = suggestionsList?.findIndex(
            (suggestion) => suggestion.id === +id
          );
          dispatch(
            suggestionsActions.setSuggestions([
              ...suggestionsList.slice(0, likedSuggestionIndex),
              likedFeedback,
              ...suggestionsList.slice(likedSuggestionIndex + 1),
            ])
          );
        }
      })
      .catch(() => {
        console.log("Error on clicking Like");
      })
      .finally(() => {
        setLikeClicking(false);
      });
  };

  return (
    <div className="feedback" data-id={feedbackID}>
      <LightButton
        className={isLikeBtnClicked ? "like-btn liked" : "like-btn"}
        onClick={(evt) => hendleBtnClick(evt)}
        loading={isLikeClicking}
      >
        <div className="feedback__btn">
          <svg
            className={
              isLikeBtnClicked
                ? "feedback__btn__svg liked"
                : "feedback__btn__svg"
            }
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
          <span className={"feedback__btn__amount"}>{feedbackLikes || 0}</span>
        </div>
      </LightButton>
      <div className="feedback__text">
        <div className="feedback__text__container">
          <h3 className="feedback__text__title">
            <Link
              style={{ textDecoration: "none" }}
              to={`/feedback/${feedbackID}`}
            >
              {feedbackTitle || ";("}
            </Link>
          </h3>
          <p className="feedback__text__desc">{feedbackDescription || ";("}</p>
        </div>
        <LightButton>{feedbackType || ";("}</LightButton>
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
        <span className="feedback__comments__amount">
          {feedbackComments?.length > 0 ? feedbackComments?.length : 0}
        </span>
      </div>
    </div>
  );
};
