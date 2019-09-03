import React, { Fragment, useContext } from "react";
import { AppDispatch, baseUrl } from "./App";
import Axios from "axios";
import batmanTheme from "./sounds/batman_theme_short.mp3";
import sausageTheme from "./sounds/kazoo_edit_norm.mp3";
import batmanPic from "./batman.png";
import sausagePic from "./faint_sausage.png";

const Next = ({ pin }) => {
  const dispatch = useContext(AppDispatch);
  const handleClick = () => {
    Axios.get(`${baseUrl}/reset`);
    dispatch({ type: "numpad" });
  };

  console.log(pin);

  return (
    <Fragment>
      <div>
        {pin === 1 && (
          <div>
            <h1>You are BATMAN</h1>
            <div>
              <img src={batmanPic} alt="Batman logo" />
            </div>
            <audio src={batmanTheme} controls autoPlay />
          </div>
        )}
        {pin === 2 && (
          <div>
            {/* <h1>You are FAINT SAUSAGE</h1> */}
            <div>
              <img src={sausagePic} alt="Sausage logo" />
            </div>
            <audio src={sausageTheme} controls autoPlay />
          </div>
        )}
        <h2>Please pick up your card</h2>

        <button type="button" onClick={() => handleClick()}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Next;
