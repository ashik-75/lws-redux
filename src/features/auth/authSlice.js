import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
      state.email = action.payload.email;
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      state.email = null;
      state.refreshToken = null;
    },
    tokenReceived: (state, action) => {
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
    },
  },
});

const authSliceReducer = authSlice.reducer;

export const { userLoggedIn, userLoggedOut, tokenReceived } = authSlice.actions;

export default authSliceReducer;
