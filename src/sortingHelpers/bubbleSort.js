export function getBubbleSortAnimations(array) {
  const animations = [];
  bubbleSortHelper(animations, array);
  return animations;
}

function bubbleSortHelper(animations, array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push({ type: "changeColorToSecondary", indices: [j, j + 1] });
      if (array[j] > array[j + 1]) {
        animations.push({
          type: "swapHeights",
          indices: [j, j + 1],
          heights: [array[j + 1], array[j]],
        });

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      animations.push({ type: "ChangeColorToPrimary", indices: [j, j + 1] });
    }
  }
}
