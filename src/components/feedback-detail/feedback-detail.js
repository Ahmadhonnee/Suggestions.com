import { Container } from "../../components";
import { AddComment } from "../../components/add-comment";
import { FeedbackComments } from "../feedback-comments";
import { FeedbackDetailBar } from "../feedback-detail-bar";
import "./feedback-detail.css";

export const FeedbackDetail = () => {
  return (
    <Container>
      <section className="feedback-detail">
        <FeedbackDetailBar />
        <FeedbackComments />
        <AddComment />
      </section>
    </Container>
  );
};
