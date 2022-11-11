import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({
  className = "",
  to,
  children,
  dataId = "",
  ...otherProps
}) => {
  if (to)
    return (
      <Link
        data-id={dataId}
        className={"defaultBtn " + className}
        to={to}
        {...otherProps}
      >
        {children}
      </Link>
    );
  return (
    <button
      data-id={dataId}
      className={"defaultBtn " + className}
      {...otherProps}
    >
      {children}
    </button>
  );
};
