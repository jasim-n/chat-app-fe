import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    phone_number: "",
    email: "",
    pic: "",
  },
};

export const userloggedSlice = createSlice({
  name: "userlogged",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.user.id = action.payload.id;
      state.user.phone_number = action.payload.phone;
      state.user.email = action.payload.email;
      state.user.pic = action.payload.pic;
      console.log(current(state.user));
    },
  },
});

export const { addDetails } = userloggedSlice.actions;
export const userinfo = (state) => state.userlogged.value;

export default userloggedSlice.reducer;
