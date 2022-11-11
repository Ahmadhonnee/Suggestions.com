import { createContext, useState } from "react";
import { suggestions } from "./data";
import "../src/components/general/fonts.css";
import "../src/components/general/general.css";
import "../src/components/general/normalize.css";
import { Routes } from "./routes";

export const SuggestionContext = createContext();
export const LoginAuthContext = createContext();

function App() {
  const [suggestionsList, setSuggestions] = useState(suggestions);
  const [loginAuth, setLoginAuth] = useState();

  console.log(suggestionsList);

  return (
    <LoginAuthContext.Provider value={{ loginAuth, setLoginAuth }}>
      <SuggestionContext.Provider value={{ suggestionsList, setSuggestions }}>
        <Routes />
      </SuggestionContext.Provider>
    </LoginAuthContext.Provider>
  );
}

export default App;
