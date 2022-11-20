import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSuggestions } from "../../hooks";
import { Button } from "../button";
import { Container } from "../container";
import { DefaultInput } from "../default-input";
import { GoBackBar } from "../go-back-bar";
import { LigthtText } from "../light-text/";
import { MediumTitle } from "../medium-title";
import { SectionTitle } from "../section-title";
import "./edit-form.scss";

export const EditForm = ({ onSubmit, deleteSuggeston, feedback }) => {
  const { id } = useParams();
  const titleRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (feedback) {
      titleRef.current.value = feedback.title;
      typeRef.current.value = feedback.type;
      statusRef.current.value = feedback.status;
      descriptionRef.current.value = feedback.description;
    }
  }, [feedback]);

  const hendleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(evt, id);
  };
  const hendleDeleteSuggeston = () => {
    console.log("delete bosildi");
    deleteSuggeston();
    navigate("/");
  };

  return (
    <Container className={"form-container"}>
      <section className="edit-form">
        <GoBackBar goBackTo={`/feedback/${id}`} />
        <form onSubmit={hendleFormSubmit} className="edit-form-body">
          <SectionTitle className="form-title">
            Editing ‘{feedback?.title}’
          </SectionTitle>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Feedback Title</MediumTitle>
                <LigthtText>Add a short, descriptive headline</LigthtText>
              </div>
              <DefaultInput ref={titleRef} name={"title"} height={"48px"} />
            </div>
          </div>
          <div className="edit-form-details">
            <div className="edit-form-input">
              <div>
                <MediumTitle>Category</MediumTitle>
                <LigthtText>Choose a category for your feedback</LigthtText>
              </div>
              <DefaultInput
                ref={typeRef}
                name={"type"}
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
              <DefaultInput ref={statusRef} name={"status"} height={"48px"} />
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
                ref={descriptionRef}
                name={"description"}
                height={"95px"}
              />
            </div>
          </div>
          <div className="edit-form-btns">
            <div className="edit-form-left-btn">
              <Button
                className="dangerBtn"
                type="button"
                onClick={hendleDeleteSuggeston}
              >
                Delete
              </Button>
            </div>
            <div className="edit-form-right-btn">
              <Button type="submit" className="addFeedbackBtn">
                Add Feedback
              </Button>
              <Button to={`/feedback/${id}`} className="darkBtn">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
};
