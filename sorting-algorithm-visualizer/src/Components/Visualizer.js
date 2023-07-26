import React, { useEffect, useState } from "react";
import "../CSS/Visualizer.css";

const Visualizer = ({ setArray, array, swappingIndexes, setIndexes }) => {
  useEffect(() => {
    console.log("use effect");
  });
  return (
    <div className="visualizer">
      {array.map((value, index) => (
        <div
          key={index}
          className="array-bar"
          style={{
            height: `${value}px`,
            backgroundColor: swappingIndexes.includes(index) ? "red" : "black",
          }}
        />
      ))}
    </div>
  );
};

export const genArray = () => {
  const newArray = [];
  //Variables declared by let are only available inside the block where they're defined.
  //Variables declared by var are available throughout the function in which they're declared
  for (let i = 0; i < 20; i++) {
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

export async function bubbleSort(setArray, arr, swappingIndexes, setIndexes) {
  console.log("HELOOOOOOOOOO");
  console.log(swappingIndexes);
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        //if before > after
        temp = arr[j - 1]; //before element
        arr[j - 1] = arr[j]; //before element = after element
        arr[j] = temp; //after element = before element

        setIndexes([j - 1, j]);
        console.log(swappingIndexes);
        await new Promise((resolve) => setTimeout(resolve, 50));
        setArray([...arr]);
      }
    }
  }
  return arr;
}
export const insertionSort = (arr) => {
  console.log("HELOOOOOOOOOO 2");

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
  console.log("HELOOOOOOOOOO 3");

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
export function quickSort(array) {
  console.log("HELOOOOOOOOOO 4");

  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

export default Visualizer;
