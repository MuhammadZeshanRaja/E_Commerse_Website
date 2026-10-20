import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, Removeitem } from "./cartslice";
const store = configureStore({
  reducer: {
    Additem: cartSlice.reducer,
    Removeitem: cartSlice.reducer,
  },
});
export default store;
