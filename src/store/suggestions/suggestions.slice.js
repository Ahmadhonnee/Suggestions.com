import { createSlice } from "@reduxjs/toolkit";

export const { actions: suggestionsActions, reducer: suggestionsReducer } =
  createSlice({
    name: "suggestions",
    initialState: {
      suggestionsList: null,
      error: null,
    },
    reducers: {
      setSuggestions: (state, { payload }) => {
        state.suggestionsList = payload;
      },
      setError: (state, { payload }) => {
        state.error = payload;
      },
    },
  });
