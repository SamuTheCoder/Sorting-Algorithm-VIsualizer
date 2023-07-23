import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "../CSS/Visualizer.css";

const Visualizer = ({ array }) => {
  console.log(array);
  return (
    <div className="visualizer">
      {array.map((value, index) => (
        <div
          key={index}
          className="array-bar"
          style={{ height: `${value}px` }}
        />
      ))}
    </div>
  );
};

export const genArray = () => {
  const newArray = [];
  //Variables declared by let are only available inside the block where they're defined.
  //Variables declared by var are available throughout the function in which they're declared
  for (let i = 0; i < 100; i++) {
    newArray.push(getRandomInt(5, 500));
  }
  return newArray;
};

//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const bubbleSort = (arr) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[i]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};
export const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minptr = i;
    for (let j = i + 1; j < arr.length; i++) {
      if (arr[minptr] > arr[j]) {
        minptr = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minptr];
    arr[minptr] = temp;
  }
  return arr;
};
export const quickSort = (arr) => {};

export default Visualizer;
