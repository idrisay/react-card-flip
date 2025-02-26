import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button id={`idris-${Date.now()}`}>{props.label}</button>;
};

export default Button;
