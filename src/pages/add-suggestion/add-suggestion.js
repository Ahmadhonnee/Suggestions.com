import { useNavigate, useParams } from "react-router-dom";
import { AddForm } from "../../components";
import { API_URL } from "../../consts";
import { useSuggestions } from "../../hooks";
import "./add-suggestion.css";

export const AddSuggestion = () => {
  const nagigate = useNavigate();
  const { id } = useParams();

  const { suggestionsList, setSuggestions } = useSuggestions();

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
          setSuggestions([newFeedback, ...suggestionsList]);
        }
        nagigate("/");
      });
  };

  return <AddForm addFunc={hendleBtnAdd} />;
};
