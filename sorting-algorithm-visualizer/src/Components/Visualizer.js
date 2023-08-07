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
            backgroundColor: swappingIndexes.includes(index) ? "red" : "white",
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
  for (let i = 0; i < 8; i++) {
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

export async function bubbleSort(setArray, arr, setIndexes) {
  console.log("HELOOOOOOOOOO");
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        //if before > after
        swap(arr, j - 1, j, setIndexes, setArray);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
  }

  finalAnimation(arr, setIndexes);
  return arr;
}
export async function insertionSort(setArray, arr, setIndexes) {
  console.log("HELOOOOOOOOOO 2");

  for (let i = 1; i < arr.length + 1; i++) {
    let j = i - 1; //left element
    let temp = 0;
    while (j > 0 && arr[j] < arr[j - 1]) {
      //if left > right
      swap(arr, j, j - 1, setIndexes, setArray);
      await new Promise((resolve) => setTimeout(resolve, 50));

      j = j - 1;
    }
  }

  finalAnimation(arr, setIndexes);
  return arr;
}
export async function selectionSort(setArray, arr, setIndexes) {
  console.log("HELOOOOOOOOOO 3");

  for (let i = 0; i < arr.length; i++) {
    let minptr = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minptr] > arr[j]) {
        minptr = j;
      }
    }
    if (minptr != i) {
      swap(arr, i, minptr, setIndexes, setArray);

      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  finalAnimation(arr, setIndexes);
  return arr;
}

//not implemented
export async function quickSort(
  arr,
  setIndexes,
  setArray,
  startIndex,
  endIndex
) {
  console.log("HELLLLLLOOOOOOOOOOOO 4");
  console.log(arr);

  let workingBranch = arr.slice(startIndex, endIndex + 1);
  console.log(workingBranch);
  if (workingBranch.length <= 1) {
    console.log("ye");
    return arr;
  }

  var pivot = workingBranch[0];

  var left = [];
  var right = [];

  for (var i = 1; i < workingBranch.length; i++) {
    workingBranch[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  console.log(left);
  console.log(right);

  workingBranch = left.concat(pivot, right);
  console.log("after sort" + workingBranch);

  if (arr[0] == workingBranch[0]) {
    arr = workingBranch.concat(arr.slice(endIndex, arr.length));
  } else if (arr[arr.length - 1] == workingBranch[workingBranch.length - 1]) {
    arr = arr.slice(0, startIndex).concat(workingBranch);
  } else {
    arr = arr
      .slice(0, startIndex)
      .concat(workingBranch, arr.slice(endIndex, arr.length));

    setArray([...arr]);
  }
  console.log("concat: " + arr);
  await new Promise((resolve) => setTimeout(resolve, 50));

  let leftStartIndex = startIndex;
  let leftEndIndex = startIndex + left.length - 1;

  let rightStartIndex = endIndex;
  let rightEndIndex = endIndex + right.length - 1;
  return (
    quickSort(arr, setIndexes, setArray, leftStartIndex, leftEndIndex) +
    [pivot] +
    quickSort(arr, setIndexes, setArray, rightStartIndex, rightEndIndex + 1)
  );
}

export function swap(arr, a, b, setIndexes, setArray) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

  setIndexes([a, b]);
  setArray([...arr]);
}

export async function finalAnimation(arr, setIndexes) {
  let auxArray = [];
  for (let i = 0; i < arr.length; i++) {
    auxArray.push(i, i + 1);
    setIndexes([...auxArray]);
    await new Promise((resolve) => setTimeout(resolve, 25));
  }

  setIndexes([]);
}
export default Visualizer;
