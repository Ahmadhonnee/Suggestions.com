import "./aside.css";
import { Mentor } from "../mentor/mentor";
import { Filterbar } from "../filterbar/filterbar";
import { Roadmap } from "../roadmap/roadmap";

export const Aside = () => {
  return (
    <aside className="aside">
      <Mentor></Mentor>
      <Filterbar></Filterbar>
      <Roadmap></Roadmap>
    </aside>
  );
};
