import React, { useState } from "react";
import { PatternFormat } from "react-number-format";

const Input = ({ value, onChange, props }) => {
  const [isFocus, setFocusState] = useState(false);

  return (
    <div isfocus={isFocus.toString()} name={props.name}>
      <label htmlFor={props.name}>{props.placeholder}</label>
      {props.type !== "textarea" ? (
        props.format ? (
          <PatternFormat
            format={props.format}
            value={value}
            onChange={onChange}
            onFocus={() => {
              setFocusState(true);
            }}
            onBlur={() => {
              setFocusState(value ? true : false);
            }}
            {...props}
            {...props}
          />
        ) : (
          <input
            id={props.name}
            value={value}
            onChange={onChange}
            onFocus={() => {
              setFocusState(true);
            }}
            onBlur={() => {
              setFocusState(value ? true : false);
            }}
            {...props}
          />
        )
      ) : (
        <textarea
          id={props.name}
          value={value}
          onChange={onChange}
          onFocus={() => {
            setFocusState(true);
          }}
          onBlur={() => {
            setFocusState(value ? true : false);
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
