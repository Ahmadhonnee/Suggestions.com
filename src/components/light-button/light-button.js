import "./light-button.scss";

export const LightButton = ({
  children,
  onClick,
  className,
  loading,
  ...props
}) => {
  return (
    <span
      className={className ? "lightBtn" + " " + className : "lightBtn"}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {children}
    </span>
  );
};
