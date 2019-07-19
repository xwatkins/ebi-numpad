import React, { Fragment, useContext } from "react";
import { AppDispatch, baseUrl } from "./App";
import Axios from "axios";

const Next = () => {
  const dispatch = useContext(AppDispatch);

  const handleClick = () => {
    Axios.get(`${baseUrl}/reset`);
    dispatch({ type: "numpad" });
  };

  return (
    <Fragment>
      <button type="button" onClick={() => handleClick()}>
        Next
      </button>
    </Fragment>
  );
};

export default Next;
