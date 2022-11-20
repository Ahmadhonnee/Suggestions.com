import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddForm } from "../../components";
import { API_URL } from "../../consts";
import { useSuggestions } from "../../hooks";
import { suggestionsActions } from "../../store/suggestions/suggestions.slice";
import "./add-suggestion.css";

export const AddSuggestion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  // const { suggestionsList, setSuggestions } = useSuggestions();
  const { suggestionsList } = useSelector((state) => state.suggestions);

  const hendleBtnAdd = (evt) => {
    evt.preventDefault();
    let { title, feature, feedback_detail } = evt.target.elements;
    const newFeedback = {
      id: Math.floor(Math.random() * 1000),
      title: title.value,
      description: feedback_detail.value,
      type: feature.value,
      status: "planned",
      isLiked: false,
      likes: 0,
      comments: [],
    };

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        if (suggestionsList) {
          dispatch(
            suggestionsActions.setSuggestions([newFeedback, ...suggestionsList])
          );
        }
        navigate("/");
      });
  };

  return <AddForm addFunc={hendleBtnAdd} />;
};
