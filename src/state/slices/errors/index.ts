import { combineReducers } from "redux";
import apiErrorsReducers from "./apiErrorSlice";
import inputErrorsReducers from "./inputErrorsSlice";

export const ErrorReducers = combineReducers({
  api: apiErrorsReducers,
  input: inputErrorsReducers,
});
