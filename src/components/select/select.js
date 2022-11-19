import { useState } from "react";
import { selectOptions } from "../../data";
import "./select.scss";

export const Select = () => {
  const [selected, setSelected] = useState({ id: 1, sortBy: "Most Upvotes" });

  const handleSelectClick = (evt) => {
    const target = evt.target;
    console.log(target);
    if (target.matches(".select__box__item")) {
      const selectID = target.dataset.id;
      const selectedObj = selectOptions.find(
        (option) => option.id === +selectID
      );
      setSelected(selectedObj);
    }
  };

  return (
    <div className="select">
      <span className="select__sortby">
        Sort by : <span className="select__selected">{selected.sortBy}</span>
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
              {option.sortBy}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
