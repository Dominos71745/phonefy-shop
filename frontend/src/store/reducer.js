import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
} from "./actionTypes";

const initialState = {
  phones: [
    {
      id: 1,
      name: "Phone 1",
      price: 100,
      quantity: 2,
    },
    // Add other phones as needed
  ],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        phones: state.phones.map((phone) =>
          phone.id === action.id ? { ...phone, selected: true } : phone
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        phones: state.phones.map((phone) =>
          phone.id === action.id ? { ...phone, selected: false } : phone
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        phones: state.phones.map((phone) =>
          phone.id === action.id
            ? { ...phone, quantity: phone.quantity + 1 }
            : phone
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        phones: state.phones.map((phone) =>
          phone.id === action.id
            ? { ...phone, quantity: phone.quantity - 1 }
            : phone
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        phones: state.phones.map((phone) =>
          phone.id === action.id ? { ...phone, quantity: 0 } : phone
        ),
      };
    default:
      return state; // Ensure you always return the state
  }
};

export { cartReducers };
