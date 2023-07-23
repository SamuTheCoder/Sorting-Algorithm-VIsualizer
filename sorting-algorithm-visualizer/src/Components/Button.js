import React from "react";
import "../CSS/Button.css";

const Button = ({ onClickFunction }) => {
  return (
    <button className="styled-button" onClick={onClickFunction}>
      BUTTON
    </button>
  );
};

export default Button;
