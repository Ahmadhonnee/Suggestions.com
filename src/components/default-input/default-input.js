import { forwardRef } from "react";
import "./default-input.css";

export const DefaultInput = forwardRef(
  ({ name, text = "", type = "", height = "", putValue }, ref) => {
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
            placeholder=" "
            ref={ref}
            required
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
          placeholder=" "
          required
          ref={ref}
        />
      </div>
    );
  }
);
