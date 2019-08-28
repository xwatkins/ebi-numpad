import React, { Fragment, useContext } from "react";
import { AppDispatch, baseUrl } from "./App";
import Axios from "axios";
import drumRoll from "./sounds/drum_roll_norm.mp3";

const Next = () => {
  const dispatch = useContext(AppDispatch);

  const handleClick = () => {
    Axios.get(`${baseUrl}/reset`);
    dispatch({ type: "numpad" });
  };

  return (
    <Fragment>
      <div>
        <h2>Please pick up your card</h2>
        <button type="button" onClick={() => handleClick()}>
          Next
        </button>
        <div style={{ marginTop: "2rem" }}>
          <audio src={drumRoll} controls autoPlay />
        </div>
      </div>
    </Fragment>
  );
};

export default Next;
