import { LightButton } from "../../../../components/light-button/light-button";
import "./filterbar.css";

export const Filterbar = () => {
  return (
    <div className="filterbar">
      <LightButton text={"All"}></LightButton>
      <LightButton text={"UI"}></LightButton>
      <LightButton text={"UX"}></LightButton>
      <LightButton text={"Enhancement"}></LightButton>
      <LightButton text={"Bug"}></LightButton>
      <LightButton text={"Feature"}></LightButton>
    </div>
  );
};
