import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({
  className = "",
  to,
  children,
  dataId = "",
  onClick,
  loading,
  ...otherProps
}) => {
  if (to)
    return (
      <Link
        data-id={dataId}
        className={"defaultBtn " + className}
        to={to}
        onClick={onClick}
        disabled={loading}
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
      disabled={loading}
      {...otherProps}
    >
      {children}
    </button>
  );
};
