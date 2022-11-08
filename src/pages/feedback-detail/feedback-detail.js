import { Container } from "../../components/container/container";
import { FeedbackComments } from "../../components/feedback-comments/feedback-comments";
import { FeedbackDetailBar } from "../../components/feedback-detail-bar/feedback-detail-bar";
import "./feedback-detail.css";

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
