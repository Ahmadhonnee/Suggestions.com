import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../consts";
import { useSuggestions } from "../../hooks";
import { suggestionsActions } from "../../store/suggestions/suggestions.slice";
import { Button } from "../button";

import { DefaultInput } from "../default-input";
import { LigthtText } from "../light-text";
import { SectionTitle } from "../section-title";
import "./add-comment.scss";

export const AddComment = ({ currentFeedback, setCurrentFeedback }) => {
  const [charactersLeft, setCharacters] = useState(225);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { suggestionsList, setSuggestions } = useSuggestions();
  const { suggestionsList } = useSelector((state) => state.suggestions);

  const handleInputChange = (evt) => {
    setCharacters(225 - +evt.target.value.length);
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

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const { comment_title } = evt.target.elements;

    const newComment = {
      id: Math.floor(Math.random() * 1000),
      title: comment_title.value,
    };

    if (!currentFeedback) {
      return null;
    }

    const updatedFeedback = {
      ...currentFeedback,
      comments: [...(currentFeedback.comments || null), newComment],
    };

    setLoading(true);
    fetch(API_URL + "/" + id, {
      method: "PUT",
      body: JSON.stringify(updatedFeedback),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        if (suggestionsList) {
          const currentFeedbackIndex = suggestionsList?.finIndex(
            (suggestion) => {
              return suggestion.id === id;
            }
          );
          dispatch(
            suggestionsActions.setSuggestions(
              ...suggestionsList.slice(0, currentFeedbackIndex),
              updatedFeedback,
              ...suggestionsList.slice(currentFeedbackIndex + 1)
            )
          );
        }
      })
      .finally(() => {
        console.log("done");
        setLoading(false);
        setCurrentFeedback(updatedFeedback);
        comment_title.value = "";
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-comment">
      <SectionTitle>Add Comment</SectionTitle>
      <DefaultInput
        onChange={handleInputChange}
        onPaste={handleInputPaste}
        onKeyPress={handleInputTyping}
        text="Type your comment here"
        name="comment_title"
      />
      <div className="add-comment__submit">
        <LigthtText>{charactersLeft} characters left</LigthtText>
        <Button loading={isLoading} className="addFeedbackBtn">
          Post Comment
        </Button>
      </div>
    </form>
  );
};
