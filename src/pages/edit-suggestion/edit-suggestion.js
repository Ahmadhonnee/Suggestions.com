import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditForm } from "../../components";
import { API_URL } from "../../consts";
import { useSuggestions } from "../../hooks";
import { suggestionsActions } from "../../store/suggestions/suggestions.slice";
import "./edit-suggestion.scss";

export const EditSuggestion = () => {
  // const { suggestionsList, setSuggestions } = useSuggestions();
  const { suggestionsList } = useSelector((state) => state.suggestions);
  const navigate = useNavigate();
  const { id } = useParams();
  const [feedback, setFeedback] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setFeedback(data);
      });
  }, [id]);

  const handleFormSubmit = (evt, paramID) => {
    evt.preventDefault();

    const {
      id: suggestionID,
      likes: suggestionLikes,
      comments: suggestionComments,
    } = feedback;

    const { title, type, status, description } = evt.target.elements;

    const editedSuggestion = {
      id: suggestionID,
      title: title.value,
      description: description.value,
      type: type.value,
      likes: suggestionLikes,
      status: status.value,
      comments: suggestionComments,
    };

    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(editedSuggestion),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => {
        if (suggestionsList) {
          const editingSuggestionIndex = suggestionsList.findIndex(
            (suggestion) => suggestion.id === +paramID
          );
          dispatch(
            suggestionsActions.setSuggestions([
              ...suggestionsList.slice(0, editingSuggestionIndex),
              editedSuggestion,
              ...suggestionsList.slice(editingSuggestionIndex + 1),
            ])
          );
        }
        navigate("/");
      });
  };

  const hendleSuggestionDelete = () => {
    const deletingIndex = suggestionsList.findIndex(
      (suggestion) => suggestion.id === +id
    );

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => {
        dispatch(
          suggestionsActions.setSuggestions([
            ...suggestionsList.slice(0, deletingIndex),
            ...suggestionsList.slice(deletingIndex + 1),
          ])
        );
      })
      .catch(() => {
        console.log("ERROR in Deleting!!!");
      });
  };

  return (
    <EditForm
      onSubmit={handleFormSubmit}
      deleteSuggeston={hendleSuggestionDelete}
      feedback={feedback}
    />
  );
};
