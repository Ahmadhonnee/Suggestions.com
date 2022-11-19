import { createContext, useState } from "react";
import "../src/components/general/fonts.css";
import "../src/components/general/general.css";
import "../src/components/general/normalize.css";
import { AuthApp } from "./Auth-app";
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
  );
}

export default App;
