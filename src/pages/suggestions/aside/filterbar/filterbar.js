import { useState } from "react";
import { useDispatch } from "react-redux";
import { LightButton } from "../../../../components";
import { API_URL } from "../../../../consts";
import { suggestionsActions } from "../../../../store/suggestions/suggestions.slice";
import "./filterbar.css";

export const Filterbar = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false); //      HERE!!!!

  const handleFilterbarClick = (evt) => {
    const target = evt.target;
    if (target.matches(".filterbar__filterby")) {
      const filterBy = target.dataset.filterBy;

      target.className += " clicked";
      setLoading(true);
      fetch(
        `${API_URL}?${new URLSearchParams({
          type_like: filterBy,
        })}`
      )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject(res);
        })
        .then((data) => {
          dispatch(suggestionsActions.setSuggestions(data));
        })
        .catch(() => {
          console.log("Error in Filtering");
        })
        .finally(() => {
          setLoading(false);
          target.className = "lightBtn filterbar__filterby";
        });
    }
  };
  return (
    <div className="filterbar" onClick={handleFilterbarClick}>
      <LightButton className="filterbar__filterby" data-filter-by="">
        {"All"}
      </LightButton>
      <LightButton className="filterbar__filterby" data-filter-by="UI">
        {"UI"}
      </LightButton>
      <LightButton className="filterbar__filterby" data-filter-by="UX">
        {"UX"}
      </LightButton>
      <LightButton className="filterbar__filterby" data-filter-by="Enhancement">
        {"Enhancement"}
      </LightButton>
      <LightButton className="filterbar__filterby" data-filter-by="Bug">
        {"Bug"}
      </LightButton>
      <LightButton className="filterbar__filterby" data-filter-by="Feature">
        {"Feature"}
      </LightButton>
    </div>
  );
};
