import React from "react";
import classes from './input_field.module.css'

function InputField(props) {
  return (
    <div className={classes.fieldContainer} >
      <label className={classes.label} htmlFor={props.id}>{props.label}</label>
      <input
      className={classes.input}
        id={props.id}
        value={props.value}
        type="text"
        onChange={props.change}
      />
    </div>
  );
}

export default InputField;
