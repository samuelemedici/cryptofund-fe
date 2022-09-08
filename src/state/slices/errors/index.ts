import { combineReducers } from "redux";
import inputErrorsReducers from "./inputErrorsSlice";

export const ErrorReducers = combineReducers({
  input: inputErrorsReducers,
});
