import { Container } from "../../../components/container/container";
import { AddComment } from "../../pages/feedback-detail/add-comment/add-comment";
import { FeedbackComments } from "../feedback-comments/feedback-comments";
import { FeedbackDetailBar } from "../feedback-detail-bar/feedback-detail-bar";
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
