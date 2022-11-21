import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../../consts";
import { selectOptions } from "../../data";
import { suggestionsActions } from "../../store/suggestions/suggestions.slice";
import "./select.scss";

export const Select = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({
    id: 1,
    title: "Most Upvotes",
    sortBy: "likes",
  });

  const handleSelectClick = (evt) => {
    const target = evt.target;
    if (target.matches(".select__box__item")) {
      const selectID = target.dataset.id;
      const selectedObj = selectOptions.find(
        (option) => option.id === +selectID
      );
      setSelected(selectedObj);
    }
  };
  useEffect(() => {
    const splittedValue = selected.sortBy.split(" ");
    fetch(
      `${API_URL}?${new URLSearchParams({
        _sort: splittedValue[0],
        _order: splittedValue[1],
      })}`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((data) => {
        dispatch(suggestionsActions.setSuggestions(data));
      })
      .catch(() => {
        console.log("Error in Soritng!!!");
      })
      .finally(() => {});
  }, [selected]);

  return (
    <div className="select">
      <span className="select__sortby">
        Sort by : <span className="select__selected">{selected.title}</span>
      </span>
      <svg
        className="select__svg"
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 6L5 2L9 6" stroke="white" strokeWidth="2" />
      </svg>
      <div className="select__box" onClick={handleSelectClick}>
        <ul className="select__box__items">
          {selectOptions.map((option) => (
            <li
              className="select__box__item"
              data-id={option.id}
              key={option.id}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
