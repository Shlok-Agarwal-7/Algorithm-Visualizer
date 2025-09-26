import { useEffect, useState } from "react";
import "./sortingVisualizer.css";

import { getBubbleSortAnimations } from "../sortingHelpers/bubbleSort";
import { getInsertionSortAnimations } from "../sortingHelpers/insertionSort";
import { getMergeSortAnimations } from "../sortingHelpers/mergeSort";
import { getQuickSortAnimations } from "../sortingHelpers/quickSort";
import { getRadixSortAnimations } from "../sortingHelpers/radixSort";

const ANIMATION_SPEED = 3;
const PRIMARY_COLOUR = "pink";
const SECONDARY_COLOUR = "red";

const SortingAlgorithms = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(400);
  const [isSorting, setIsSorting] = useState(false);
  const [highlight, setHighlight] = useState([]);


  // Plays animations produced for an sorting algorithm
  // animations[i] = {type,indices,heights}
  // type can be "changeColorToPrimary" , "changeColorToSecondary" , "swapHeights"
  // To add new sorting just write the algorithm and add animations at the steps 
  
  const playAnimations = async (animations) => {
    setIsSorting(true);

    for (let i = 0; i < animations.length; i++) {
      const step = animations[i];

      switch (step.type) {
        case "changeColorToPrimary":
          setHighlight([]);
          break;
        case "changeColorToSecondary":
          setHighlight([...step.indices]);
          break;
        case "swapHeights":
          setArray((prev) => {
            const newBars = [...prev];
            for (let j = 0; j < step.indices.length; ++j) {
              newBars[step.indices[j]] = step.heights[j];
            }
            return newBars;
          });
          break;
      }

      await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
    }

    await playSortingFinishAnimation();
    setIsSorting(false);
  };

  // final finish animation
  const playSortingFinishAnimation = async () => {
    for (let i = 0; i < arraySize; i++) {
      setHighlight((prev) => [i, ...prev]);
      await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED));
    }
  };

  // calling function for the playAnimations Function
  const handleSort = async (getAnimationsFn) => {
    const animations = getAnimationsFn([...array]);
    setIsSorting(true);
    await playAnimations(animations);
    setIsSorting(false);
  };

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
            style={{
              backgroundColor: highlight.includes(idx)
                ? SECONDARY_COLOUR
                : PRIMARY_COLOUR,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="buttons-container">
        <button
          onClick={() => handleSort(getMergeSortAnimations)}
          disabled={isSorting}
        >
          {" "}
          mergeSort{" "}
        </button>
        <button
          onClick={() => handleSort(getBubbleSortAnimations)}
          disabled={isSorting}
        >
          {" "}
          bubbleSort{" "}
        </button>
        <button
          onClick={() => handleSort(getQuickSortAnimations)}
          disabled={isSorting}
        >
          {" "}
          quickSort{" "}
        </button>
        <button
          onClick={() => handleSort(getInsertionSortAnimations)}
          disabled={isSorting}
        >
          {" "}
          InsertionSort{" "}
        </button>
        <button
          onClick={() => handleSort(getRadixSortAnimations)}
          disabled={isSorting}
        >
          RadixSort
        </button>
        <button onClick={() => resetArray()} disabled={isSorting}>
          Reset Array
        </button>
      </div>
    </>
  );


  // utils function for array management reset and getting random number for a element  
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

  function resetArray() {
    generateArray();
    setHighlight([]);
  }
};

export default SortingAlgorithms;
