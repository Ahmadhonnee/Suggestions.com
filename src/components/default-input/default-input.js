import "./default-input.css";

export const DefaultInput = ({
  name,
  text = "",
  type = "",
  height = "",
  putValue,
}) => {
  if (text) {
    return (
      <div className="input-parent">
        <input
          style={{ height: height }}
          autoComplete="off"
          className="default-input"
          type={type || "text"}
          id={"def-input-" + name}
          defaultValue={putValue}
          name={name}
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
        name={name}
        defaultValue={putValue}
      />
    </div>
  );
};
