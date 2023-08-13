import React from "react";
import "../CSS/Button.css";

const Button = ({ onClickFunction, text }) => {
  return (
    <button className="styled-button" onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;
