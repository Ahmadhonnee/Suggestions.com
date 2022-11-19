import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({
  className = "",
  to,
  children,
  dataId = "",
  onClick,
  ...otherProps
}) => {
  if (to)
    return (
      <Link
        data-id={dataId}
        className={"defaultBtn " + className}
        to={to}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </Link>
    );
  return (
    <button
      data-id={dataId}
      className={"defaultBtn " + className}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
