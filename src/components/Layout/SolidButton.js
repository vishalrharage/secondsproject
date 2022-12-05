import React from "react";

import classes from "./SolidButton.module.css";

const SolidButton = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      <span>{props.startAdornment}</span>
      <span>{props.children}</span>
      <span>{props.endAdornment}</span>
    </button>
  );
};

export default SolidButton;
