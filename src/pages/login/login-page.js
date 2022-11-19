import { Button, Container, GoBackBar, Login } from "../../components";
import "./login-page.css";

export const LoginPage = () => {
  return (
    <Container className={"form-container"}>
      <section className="login-page">
        <GoBackBar goBackTo={"/"} />
        <Login />
      </section>
    </Container>
  );
};
