import { Button } from "../button";
import "./go-back-bar.scss";

export const GoBackBar = ({ goBackTo }) => {
  return (
    <div className="go-back-bar">
      <Button to={goBackTo} className="goback-btn">
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
    </div>
  );
};
