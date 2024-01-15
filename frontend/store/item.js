const { createSlice } = require("@reduxjs/toolkit");

const item = createSlice({
  name: "item",
  initialState: {
    phones: [
      {
        name: "",
        price: 0,
        storage: [],
        description: "",
        colors: [],
        leasing: "",
      },
    ],
  },
  reducers: {
    setPhones: (state, action) => {
      state.phones = action.payload;
    },
  },
});

export const { setPhones } = item.actions;
