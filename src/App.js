import React, { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

  const addNumberToCode = number => {
    setCode(`${code}${number}`);
  };

  const clear = () => {
    setCode("");
  };

  const deleteLast = () => {
    if (code.length > 0) {
      setCode(code.substring(0, code.length - 1));
    }
  };

  return (
    <div className="App">
      <div className="Code">{code ? code : "Your number"}</div>
      <div className="NumPad">
        {Array(3)
          .fill(3)
          .map((row, index) => (
            <div className="NumRow">
              {Array(3)
                .fill(3)
                .map((col, index2) => {
                  const number = index * 3 + 1 * index2 + 1;
                  return (
                    <button onClick={() => addNumberToCode(number)}>
                      {number}
                    </button>
                  );
                })}
            </div>
          ))}

        <div className="NumRow">
          <button onClick={() => clear()}>CLR</button>
          <button onClick={() => addNumberToCode(0)}>0</button>
          <button onClick={() => deleteLast()}>DEL</button>
        </div>
      </div>
    </div>
  );
}

export default App;
