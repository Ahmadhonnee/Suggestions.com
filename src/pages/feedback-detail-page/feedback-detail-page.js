import { Container, Feedback } from "../../components";
import { FeedbackComments } from "../../components";
import { FeedbackDetailBar } from "../../components";
import "./feedback-detail-page.css";

export const FeedbackDetail = () => {
  return (
    <Container>
      <section className="feedback-detail">
        <FeedbackDetailBar />
        <FeedbackComments />
      </section>
    </Container>
  );
};
