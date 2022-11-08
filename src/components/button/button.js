import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({ className = "", to, children, dataId = "" }) => {
  if (to)
    return (
      <Link data-id={dataId} className={"defaultBtn " + className} to={to}>
        {children}
      </Link>
    );
  return (
    <button data-id={dataId} className={"defaultBtn " + className}>
      {children}
    </button>
  );
};
