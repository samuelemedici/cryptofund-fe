import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SetInputErrorsPayload = string;
export type HandleInputErrorPayload = string;

interface InputErrorsState {
  ids: string[];
}

const initialState: InputErrorsState = {
  ids: [],
};

export const InputSlice = createSlice({
  name: "input-wrapper",
  initialState,
  reducers: {
    addInputError: (state, action: PayloadAction<SetInputErrorsPayload>) => {
      state.ids.push(action.payload);
    },
    removeInputError: (
      state,
      action: PayloadAction<HandleInputErrorPayload>
    ) => {
      state.ids.includes(action.payload) &&
        state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export const { addInputError, removeInputError } = InputSlice.actions;
export default InputSlice.reducer;
