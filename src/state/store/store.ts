import { configureStore } from "@reduxjs/toolkit";
import localStorage from "localstorage-slim";

import testReducers from "../slices/testSlice";
import validatedInputReducers from "../slices/validatedInputSlice";

const STATE_PERSISTANCE = "redux_store";

function getFromStorage(key: string) {
  try {
    return JSON.parse(localStorage.get(key, { decrypt: true }) || "") || {};
  } catch (err) {
    return {};
  }
}

const initialState = getFromStorage(STATE_PERSISTANCE);

export const store = configureStore({
  preloadedState: {
    test: initialState,
  },
  reducer: {
    test: testReducers,
    validatedInput: validatedInputReducers,
  },
});

store.subscribe(() => {
  localStorage.set(STATE_PERSISTANCE, JSON.stringify(store.getState().test), {
    encrypt: true,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
