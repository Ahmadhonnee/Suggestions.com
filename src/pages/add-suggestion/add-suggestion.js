import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SuggestionContext } from "../../App";
import { AddForm } from "../../components";
import "./add-suggestion.css";

export const AddSuggestion = () => {
  const nagigate = useNavigate();

  const { suggestionsList, setSuggestions } = useContext(SuggestionContext);
  // console.log(SuggestionContext);

  const hendleBtnAdd = (evt) => {
    evt.preventDefault();
    let { title, feature, feedback_detail } = evt.target.elements;
    setSuggestions([
      {
        id: Math.floor(Math.random() * 1000),
        title: title.value,
        description: feedback_detail.value,
        type: feature.value,
        commentsAmount: 0,
        likes: 0,
      },
      ...suggestionsList,
    ]);
    nagigate("/");
  };

  return <AddForm addFunc={hendleBtnAdd} />;
};
