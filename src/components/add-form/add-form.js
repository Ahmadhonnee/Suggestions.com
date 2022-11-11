import { Button } from "../button";
import { Container } from "../container";
import { DefaultInput } from "../default-input";
import { GoBackBar } from "../go-back-bar";
import { LigthtText } from "../light-text";
import { MediumTitle } from "../medium-title";
import { SectionTitle } from "../section-title";
import "./add-form.css";

export const AddForm = ({ addFunc }) => {
  return (
    <Container className={"form-container"}>
      <section className="add-form">
        <GoBackBar goBackTo={"/"} />
        <form onSubmit={addFunc} className="add-form-body">
          <SectionTitle className="form-title">
            Create New Feedback
          </SectionTitle>
          <div className="add-form-details">
            <div className="add-form-input">
              <div>
                <MediumTitle>Feedback Title</MediumTitle>
                <LigthtText>Add a short, descriptive headline</LigthtText>
              </div>
              <DefaultInput name={"title"} height={"48px"} />
            </div>
          </div>
          <div className="add-form-details">
            <div className="add-form-input">
              <div>
                <MediumTitle>Category</MediumTitle>
                <LigthtText>Choose a category for your feedback</LigthtText>
              </div>
              <DefaultInput name={"feature"} text="Feature" height={"48px"} />
            </div>
          </div>
          <div className="add-form-details">
            <div className="add-form-input">
              <div>
                <MediumTitle>Feedback Detail</MediumTitle>
                <LigthtText>
                  Include any specific comments on what should be improved,
                  added, etc.
                </LigthtText>
              </div>
              <DefaultInput name={"feedback_detail"} height={"95px"} />
            </div>
          </div>
          <div className="add-form-btns">
            <Button className="addFeedbackBtn">Add Feedback</Button>
            <Button className="darkBtn">Cancel</Button>
          </div>
        </form>
      </section>
    </Container>
  );
};
