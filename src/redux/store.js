import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./slices/flightSlice";
import detailSlice from "./slices/detailSlice";
const store = configureStore({
  reducer: { flight: flightSlice, detail: detailSlice },
});

export default store;
