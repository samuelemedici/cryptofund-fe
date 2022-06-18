import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import baseUrl from "../../utils/api";
import { addApiError } from "./errors/apiErrorSlice";

interface TestState {
  testProp?: string;
}
const initialState: TestState = {};

export const testThunk = createAsyncThunk<void>(
  "test",
  async (_, { getState, dispatch }) => {
    baseUrl
      .get("/testUrl")
      .then((response) => {
        // dispatch some actions
      })
      .catch((error: AxiosError) => {
        dispatch(
          addApiError({
            description: error.message,
          })
        );
      });
  }
);

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestProp: (state, action: PayloadAction<string>) => {
      state.testProp = action.payload;
    },
    resetTestProp: (state) => {
      state.testProp = undefined;
    },
  },
});

export const { setTestProp, resetTestProp } = TestSlice.actions;

export default TestSlice.reducer;
