import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorData } from "../../../api/generated/models/ErrorData";

interface ErrorsState {
  error?: ErrorData;
}

const initialState: ErrorsState = {};

export const ErrorsSlice = createSlice({
  name: "api-error",
  initialState,
  reducers: {
    addApiError: (state, action: PayloadAction<ErrorData>) => {
      state.error = action.payload;
    },
    removeApiError: (state) => {
      state.error = undefined;
    },
  },
});

export const { addApiError, removeApiError } = ErrorsSlice.actions;
export default ErrorsSlice.reducer;
