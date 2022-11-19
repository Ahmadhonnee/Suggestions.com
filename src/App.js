import { createContext, useState } from "react";
import "../src/components/general/fonts.css";
import "../src/components/general/general.css";
import "../src/components/general/normalize.css";
import { AuthApp } from "./Auth-app";
import { AddComment, Container } from "./components";
import { Routes } from "./routes";
import { UnAuthRoutes } from "./routes/unauth-routes";

export const LoginAuthContext = createContext();

function App() {
  const [loginAuth, setLoginAuth] = useState();

  return (
    <LoginAuthContext.Provider value={{ loginAuth, setLoginAuth }}>
      {/* {loginAuth ? <AuthApp /> : <UnAuthRoutes />} */}
      <AuthApp />
    </LoginAuthContext.Provider>
    // <Container>
    //   <AddComment />
    // </Container>
  );
}

export default App;
