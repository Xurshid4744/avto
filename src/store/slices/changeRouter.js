import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
const initialState = {
  change: token !== null ? "admin" : "user",
};

const changeRouter = createSlice({
  name: "change",
  initialState,
  reducers: {
    setChange: (state, { payload }) => {
      state.change = payload;
    },
  },
});

export const { setChange } = changeRouter.actions;

export default changeRouter;
