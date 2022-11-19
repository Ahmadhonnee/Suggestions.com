import { useContext } from "react";
import { SuggestionContext } from "../Auth-app";

export const useSuggestions = () => {
  const values = useContext(SuggestionContext);
  return values;
};
