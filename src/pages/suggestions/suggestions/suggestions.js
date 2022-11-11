import "./suggestions.css";
import { Aside } from "../aside";
import { Article } from "../article";
import { Container } from "../../../components";

export const Suggestions = () => {
  return (
    <Container>
      <section className="suggestions">
        <Aside></Aside>
        <Article></Article>
      </section>
    </Container>
  );
};
