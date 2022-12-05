import React from "react";

import classes from "./HollowButton.module.css";

const HollowButton = (props) => {
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

export default HollowButton;
