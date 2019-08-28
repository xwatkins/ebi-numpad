import React, { useReducer } from "react";
import "./App.css";
import NumPad from "./NumPad";
import Next from "./Next";

export const AppDispatch = React.createContext(null);
export const baseUrl = "http://192.168.4.1:8001";

const numpadAppReducer = (state, action) => {
  switch (action.type) {
    case "numpad":
      return { page: "numpad" };
    case "next":
      return { page: "next" };
    default:
      return state;
  }
};

function App() {
  const [store, dispatch] = useReducer(numpadAppReducer, { page: "numpad" });
  return (
    <div className="App">
      <AppDispatch.Provider value={dispatch}>
        {store.page === "numpad" ? <NumPad /> : <Next />}
      </AppDispatch.Provider>
    </div>
  );
}

export default App;
