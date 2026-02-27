import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  isAgency: false,
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("user");
    },
    loadUserFromStorage: (state) => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        Object.assign(state, JSON.parse(storedUser));
      }
    },
  },
});

export const {
  setUser,
  logoutUser,
  loadUserFromStorage,
  updateAvatar,
} = userSlice.actions;

export default userSlice.reducer;