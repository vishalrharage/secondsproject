import React from "react";

import classes from './InputField.module.css';

const InputField = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <span className={classes.endAdornment}>{props.startAdornment}</span>
      <input
        className={classes.input}
        type={props.type || "text"}
        value={props.value}
        placeholder={props.placeholder}
      />
      <span className={classes.endAdornment}>{props.endAdornment}</span>
    </>
  );
};

export default InputField;
