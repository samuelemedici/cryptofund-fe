import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SetInputErrorsPayload = string;
export type HandleInputErrorPayload = string;

interface InputErrorsState {
  idList: string[];
}

const initialState: InputErrorsState = {
  idList: [],
};

export const InputSlice = createSlice({
  name: "input-wrapper",
  initialState,
  reducers: {
    setErrors: (state, action: PayloadAction<SetInputErrorsPayload>) => {
      state.idList.push(action.payload);
    },
    handleError: (state, action: PayloadAction<HandleInputErrorPayload>) => {
      state.idList.includes(action.payload) &&
        state.idList.splice(state.idList.indexOf(action.payload), 1);
    },
  },
});

export const { setErrors, handleError } = InputSlice.actions;
export default InputSlice.reducer;
