import React from "react";
import "../CSS/Button.css";

const Button = ({ onClickFunction }) => {
  return (
    <button classname="styled-button" onClick={onClickFunction}>
      Selection Sort
    </button>
  );
};

export default Button;
