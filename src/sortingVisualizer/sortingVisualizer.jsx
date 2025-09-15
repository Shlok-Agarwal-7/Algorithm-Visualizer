import { useEffect, useState } from "react";
import "./sortingVisualizer.css"

import {playMergeSortAnimations,playBubbleSortAnimations,playQuickSortAnimations} from "../animators/sortingAnimators"

const SortingAlgorithms = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(400);

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ backgroundColor: "pink", height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={() => playMergeSortAnimations(array)}> mergeSort </button>
        <button onClick={() => playBubbleSortAnimations(array)}> bubbleSort </button>
        <button onClick={() => playQuickSortAnimations(array)}> quickSort </button>
      </div>
    </>
  );

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateArray() {
    const nums = [];
    for (let i = 0; i < arraySize; ++i) {
      nums.push(getRandomInteger(5, 500));
    }
    setArray(nums);
  }
};

export default SortingAlgorithms;
