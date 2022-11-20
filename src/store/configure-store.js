import { configureStore } from "@reduxjs/toolkit";
import { suggestionsReducer } from "./suggestions/suggestions.slice";

export const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
  },
});
