import { configureStore } from "@reduxjs/toolkit";
import localStorage from "localstorage-slim";
import thunk from "redux-thunk";
import { ErrorReducers } from "../slices/errors";
import testReducers from "../slices/testSlice";

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
    errors: ErrorReducers,
  },
  middleware: [thunk],
});

store.subscribe(() => {
  localStorage.set(STATE_PERSISTANCE, JSON.stringify(store.getState().test), {
    encrypt: true,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
