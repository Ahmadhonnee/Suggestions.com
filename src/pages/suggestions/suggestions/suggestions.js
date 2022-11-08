import "./suggestions.css";
import { Aside } from "../aside/aside/aside";
import { Article } from "../article/article/article";
import { Container } from "../../../components/container/container";

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
