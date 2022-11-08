import { useParams } from "react-router-dom";
import { suggestions } from "../../data/suggestions";
import { Button } from "../button/button";
import { Container } from "../container/container";
import { DefaultInput } from "../default-input/default-input";
import { GoBackBar } from "../go-back-bar/go-back-bar";
import { LigthtText } from "../light-text/light-text";
import { MediumTitle } from "../medium-title/medium-title";
import { SectionTitle } from "../section-title/section-title";
import "./edit-form.scss";

export const EditForm = () => {
  const { id } = useParams();

  const editingObj = suggestions.find((suggestion) => suggestion.id === +id);

  const {
    id: suggestionId,
    title: suggestionTitle,
    description: suggestionDescription,
    type: suggestionType,
    commentsAmount: suggestionCommentsAmount,
    likes: suggestionLikes,
  } = editingObj;
  return (
    <Container className={"form-container"}>
      <section className="edit-form">
        <GoBackBar goBackTo={`/feedback/:id`} />
        <form className="edit-form-body">
          <SectionTitle className="form-title">
            Editing ‘{suggestionTitle}’
          </SectionTitle>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Feedback Title</MediumTitle>
                <LigthtText>Add a short, descriptive headline</LigthtText>
              </div>
              <DefaultInput
                value={suggestionTitle}
                name={"title"}
                height={"48px"}
              />
            </div>
          </div>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Category</MediumTitle>
                <LigthtText>Choose a category for your feedback</LigthtText>
              </div>
              <DefaultInput
                value={suggestionType}
                name={"feature"}
                text="Feature"
                height={"48px"}
              />
            </div>
          </div>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Update Status</MediumTitle>
                <LigthtText>Change feedback state</LigthtText>
              </div>
              <DefaultInput
                value={suggestionType}
                name={"feature"}
                text="Feature"
                height={"48px"}
              />
            </div>
          </div>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Feedback Detail</MediumTitle>
                <LigthtText>
                  Include any specific comments on what should be improved,
                  added, etc.
                </LigthtText>
              </div>
              <DefaultInput name={"feedback-detail"} height={"95px"} />
            </div>
          </div>
          <div className="edit-form-btns">
            <Button className="addFeedbackBtn">Add Feedback</Button>
            <Button className="darkBtn">Cancel</Button>
          </div>
        </form>
      </section>
    </Container>
  );
};
