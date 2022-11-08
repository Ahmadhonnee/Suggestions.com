import "./error.scss";
import { Button } from "../button/button";
import { SectionTitle } from "../section-title/section-title";
import { LigthtText } from "../light-text/light-text";

export const Error = () => {
  return (
    <div className="error">
      <div className="error__img"></div>
      <div className="error__texts">
        <SectionTitle className="error__title">
          There is no feedback yet.
        </SectionTitle>
        <LigthtText className="error__desc">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </LigthtText>
      </div>
      <Button to={"/add"} className="addFeedbackBtn">
        + Add Feedback
      </Button>
    </div>
  );
};
