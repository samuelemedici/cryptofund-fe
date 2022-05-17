import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestState {
  testProp: string | null;
}
const initialState: TestState = {
  testProp: null,
};

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestProp: (state, action: PayloadAction<string>) => {
      state.testProp = action.payload;
    },
    resetTestProp: (state) => {
      state.testProp = null;
    },
  },
});

export const { setTestProp, resetTestProp } = TestSlice.actions;

export default TestSlice.reducer;
