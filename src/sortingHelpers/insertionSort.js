export function getInsertionSortAnimations(array) {
  const animations = [];
  insertionSortHelper(array, animations);
  return animations;
}

function insertionSortHelper(array, animations) {
  const n = array.length;
  for (let i = 1; i < n; ++i) {
    const key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      animations.push({ type: "changeColorToSecondary", indices: [j] });
      animations.push({ type: "changeColorToPrimary", indices: [j] });
      animations.push({
        type: "swapHeights",
        indices: [j + 1],
        heights: [array[j]],
      });
      array[j + 1] = array[j];
      j = j - 1;
    }

    animations.push({ type: "swapHeights", indices: [j + 1], heights: [key] });
    array[j + 1] = key;
  }
}
