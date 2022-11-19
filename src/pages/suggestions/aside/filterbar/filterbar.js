import { LightButton } from "../../../../components";
import "./filterbar.css";

export const Filterbar = () => {
  return (
    <div className="filterbar">
      <LightButton>{"All"}</LightButton>
      <LightButton>{"UI"}</LightButton>
      <LightButton>{"UX"}</LightButton>
      <LightButton>{"Enhancement"}</LightButton>
      <LightButton>{"Bug"}</LightButton>
      <LightButton>{"Feature"}</LightButton>
    </div>
  );
};
