import React, { useReducer } from "react";
import "./App.css";
import NumPad from "./NumPad";
import Next from "./Next";

export const AppDispatch = React.createContext(null);
export const baseUrl = "http://172.22.70.71:81";

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
  console.log(store);
  return (
    <div className="App">
      <AppDispatch.Provider value={dispatch}>
        {store.page === "numpad" ? <NumPad /> : <Next />}
      </AppDispatch.Provider>
    </div>
  );
}

export default App;
