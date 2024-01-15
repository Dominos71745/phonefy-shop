import { configureStore } from "@reduxjs/toolkit";
import item from "./item";

const store = configureStore({
  reducer: {
    item: item.reducer,
  },
});

export default store;
