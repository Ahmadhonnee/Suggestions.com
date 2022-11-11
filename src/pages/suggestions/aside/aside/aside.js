import "./aside.css";
import { Mentor } from "../mentor";
import { Filterbar } from "../filterbar";
import { Roadmap } from "../roadmap";

export const Aside = () => {
  return (
    <aside className="aside">
      <Mentor></Mentor>
      <Filterbar></Filterbar>
      <Roadmap></Roadmap>
    </aside>
  );
};
