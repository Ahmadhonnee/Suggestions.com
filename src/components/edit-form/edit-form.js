import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SuggestionContext } from "../../App";
import { suggestions } from "../../data";
import { Button } from "../button";
import { Container } from "../container";
import { DefaultInput } from "../default-input";
import { GoBackBar } from "../go-back-bar";
import { LigthtText } from "../light-text/";
import { MediumTitle } from "../medium-title";
import { SectionTitle } from "../section-title";
import "./edit-form.scss";

export const EditForm = () => {
  const { id } = useParams();

  const { suggestionsList, setSuggestions } = useContext(SuggestionContext);

  const editingObj = suggestionsList.find(
    (suggestion) => suggestion.id === +id
  );
  console.log(editingObj);

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
        <GoBackBar goBackTo={`/feedback/${id}`} />
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
                putValue={suggestionTitle}
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
                putValue={suggestionType}
                name={"status"}
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
              <DefaultInput
                name={"feedback-detail"}
                height={"95px"}
                putValue={suggestionDescription}
              />
            </div>
          </div>
          <div className="edit-form-btns">
            <div className="edit-form-left-btn">
              <Button className="dangerBtn">Delete</Button>
            </div>
            <div className="edit-form-right-btn">
              <Button className="addFeedbackBtn">Add Feedback</Button>
              <Button className="darkBtn">Cancel</Button>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
};
