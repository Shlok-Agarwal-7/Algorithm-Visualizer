export function getInsertionSortAnimations(array) {
  const animations = [];
  insertionSortHelper(array, animations);
  return animations;
}

function insertionSortHelper(array, animations){
  const n = array.length;
  for (let i = 1; i < n; ++i) {
    const key = array[i];
    let j = i - 1;

    
    while (j >= 0 && array[j] > key) {
        animations.push(["swapToSecondary", j]);
        animations.push(["swapToPrimary", j]);
      animations.push(["swapHeights", j + 1, array[j]]);
      array[j + 1] = array[j];
      j = j - 1;
    }

    animations.push(["swapHeights", j + 1, key]);
    array[j + 1] = key;
  }
    
}
