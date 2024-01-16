import React from "react";
import PhoneList from "./components/Phone/PhoneList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PhoneList />
    </Provider>
  );
}

export default App;
