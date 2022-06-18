import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  testProp?: string;
}
const initialState: TestState = {};

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
