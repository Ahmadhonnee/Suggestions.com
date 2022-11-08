import "./default-input.css";

export const DefaultInput = ({
  name,
  text = "",
  type = "",
  height = "",
  value,
}) => {
  if (text) {
    return (
      <div className="input-parent">
        <input
          style={{ height: height }}
          autoComplete="off"
          className="default-input"
          type={"text " + type}
          id={"def-input-" + name}
          value={value}
        />
        <label className="default-input-label" htmlFor={"def-input-" + name}>
          {text}
        </label>
      </div>
    );
  }

  return (
    <div className="input-parent">
      <input
        style={{ height: height }}
        autoComplete="off"
        className="default-input"
        type={"text " + type}
        id={"def-input-" + name}
      />
    </div>
  );
};
