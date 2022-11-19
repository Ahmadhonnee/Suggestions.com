import { createContext, useEffect, useState } from "react";

import { API_URL } from "./consts/api-url";
import { Routes } from "./routes";

export const SuggestionContext = createContext();

export const AuthApp = () => {
  const [suggestionsList, setSuggestions] = useState();

  return (
    <SuggestionContext.Provider value={{ suggestionsList, setSuggestions }}>
      <Routes />
    </SuggestionContext.Provider>
  );
};
