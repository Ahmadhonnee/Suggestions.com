import "./roadmap.css";
import { roadmap } from "../../../../data/rodamap";
import { colors } from "../../../../data/colors";

export const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__text">
        <h3 className="roadmap__title">Roadmap</h3>
        <a className="roadmap__view" href="#">
          View
        </a>
      </div>
      <div className="roadmap__statistics">
        {roadmap.map(({ name, amount, color }) => {
          const currentColor = colors.color || color;
          console.log(currentColor);
          return (
            <div className="roadmap__statistics__row">
              <div className="roadmap__statistics__group">
                <span
                  className="roadmap__statistics__circle"
                  style={{ backgroundColor: currentColor }}
                ></span>
                <span className="roadmap__statistics__status">{name}</span>
              </div>
              <span className="roadmap__statistics__amount">{amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
