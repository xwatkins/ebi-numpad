import React, { Fragment, useState, useEffect, useContext } from "react";
import { getPinForCode } from "./utils";
import Axios from "axios";
import { AppDispatch, baseUrl } from "./App";

const NumPad = () => {
  const [code, setCode] = useState("");
  const dispatch = useContext(AppDispatch);

  useEffect(() => {
    async function handleCode() {
      const pin = getPinForCode(code);
      try {
        const response = await Axios.get(`${baseUrl}/${pin}/on`);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "next" });
    }
    if (code.length >= 6) {
      handleCode(code);
    }
  }, [code, dispatch]);

  const addNumberToCode = number => {
    if (code.length < 6) {
      setCode(`${code}${number}`);
    }
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
    <Fragment>
      <div className="Code">{code ? code : "Your number"}</div>
      <div className="NumPad">
        {Array(3)
          .fill(3)
          .map((row, index) => (
            <div className="NumRow" key={index}>
              {Array(3)
                .fill(3)
                .map((col, index2) => {
                  const number = index * 3 + 1 * index2 + 1;
                  return (
                    <button
                      onClick={() => addNumberToCode(number)}
                      key={index2}
                    >
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
    </Fragment>
  );
};

export default NumPad;
