import { getMergeSortAnimations } from "../sortingHelpers/mergeSort";
import { getBubbleSortAnimations } from "../sortingHelpers/bubbleSort";
import { getQuickSortAnimations } from "../sortingHelpers/quickSort";
import { getInsertionSortAnimations } from "../sortingHelpers/insertionSort";

const ANIMATION_SPEED = 3;
const PRIMARY_COLOUR = "pink";
const SECONDARY_COLOUR = "red";
const FINAL_COLOUR = "purple";

export function playBubbleSortAnimations(array) {
  const animations = getBubbleSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const [animationType, barOneIdx, newHeight1, newHeight2] = animations[i];
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barOneIdx + 1].style;

    if (animationType === "swapToSecondary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOUR;
        barTwoStyle.backgroundColor = SECONDARY_COLOUR;
      }, i * ANIMATION_SPEED);
    } else if (animationType === "swapToPrimary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIMARY_COLOUR;
        barTwoStyle.backgroundColor = PRIMARY_COLOUR;
      }, i * ANIMATION_SPEED);
    } else if (animationType === "swapHeights") {
      setTimeout(() => {
        barOneStyle.height = `${newHeight1}px`;
        barTwoStyle.height = `${newHeight2}px`;
      }, i * ANIMATION_SPEED);
    }
  }

  setTimeout(() => {
    playSortingFinishAnimation();
  }, 1 * animations.length);
}

export function playMergeSortAnimations(array) {
  const animations = getMergeSortAnimations(array);
  for (let i = 0; i < animations.length; ++i) {
    const animation = animations[i];
    const arrayBars = document.getElementsByClassName("array-bar");
    const colorChange = i % 3 !== 2;
    if (colorChange) {
      const [barOneIdx, barTwoIdx] = animation;
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animation;
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED);
    }
  }
  setTimeout(() => {
    playSortingFinishAnimation();
  }, ANIMATION_SPEED * animations.length);
}

export function playQuickSortAnimations(array) {
  const animations = getQuickSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const [animationType, barOneIdx, barTwoIdx, newHeight1, newHeight2] =
      animations[i];
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;

    if (animationType === "swapToSecondary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOUR;
        barTwoStyle.backgroundColor = SECONDARY_COLOUR;
      }, i * ANIMATION_SPEED);
    } else if (animationType === "swapToPrimary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIMARY_COLOUR;
        barTwoStyle.backgroundColor = PRIMARY_COLOUR;
      }, i * ANIMATION_SPEED);
    } else if (animationType === "swapHeights") {
      setTimeout(() => {
        barOneStyle.height = `${newHeight1}px`;
        barTwoStyle.height = `${newHeight2}px`;
      }, i * ANIMATION_SPEED);
    }
  }

  setTimeout(() => {
    playSortingFinishAnimation();
  }, ANIMATION_SPEED * animations.length);
}

export function playInsertionSortAnimations(array) {
  const animations = getInsertionSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const [animationType, barOneIdx, newHeight1] = animations[i];
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[barOneIdx].style;

    if (animationType === "swapToSecondary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOUR;
      }, i * (ANIMATION_SPEED + 3));
    } else if (animationType === "swapToPrimary") {
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIMARY_COLOUR;
      }, i * (ANIMATION_SPEED + 3));
    } else if (animationType === "swapHeights") {
      setTimeout(() => {
        barOneStyle.height = `${newHeight1}px`;
      }, i * (ANIMATION_SPEED + 3));
    }
  }
  setTimeout(() => {
    playSortingFinishAnimation();
  }, ANIMATION_SPEED * animations.length);
}

function playSortingFinishAnimation() {
  const arrayBars = document.getElementsByClassName("array-bar");
  for (let i = 0; i < arrayBars.length; ++i) {
    const currBarStyle = arrayBars[i].style;
    setTimeout(() => {
      currBarStyle.backgroundColor = FINAL_COLOUR;
    }, i * ANIMATION_SPEED);
  }
}
