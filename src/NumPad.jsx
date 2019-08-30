import React, { Fragment, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AppDispatch, baseUrl } from "./App";
import {
  setup,
  getDrawer
} from "ebi-25th-anniversary-uniprot-ticket-drawer-mapping";
import drumRoll from "./sounds/drum_roll_norm.mp3";

setup({
  seed: "EBI 25 Anniversary",
  minDrawer: 1,
  maxDrawer: 7,
  minTicket: 10 ** 5,
  maxTicket: 10 ** 6
});

const NumPad = () => {
  const [code, setCode] = useState("");
  const dispatch = useContext(AppDispatch);

  useEffect(() => {
    async function handleCode() {
      const pin = getDrawer(code);
      try {
        const response = await Axios.get(`${baseUrl}/${pin}/on`);
        dispatch({ type: "pin", id: response.response.pin });
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
      {code.length >= 6 ? (
        <div>
          <audio src={drumRoll} controls autoPlay />
        </div>
      ) : (
        <div className="Code">{code ? code : "Your number"}</div>
      )}
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
