import "./light-button.css";

export const LightButton = ({ children, onClick }) => {
  return (
    <span className="lightBtn" onClick={onClick}>
      {children}
    </span>
  );
};
