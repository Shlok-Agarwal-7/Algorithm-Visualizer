export function getMergeSortAnimations(array) {
  let animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeSort(array, 0, array.length - 1, animations, auxArray);
  return animations;
}

function mergeSort(array, start, end, animations, auxArray) {
  if (start === end) return;
  let middle = Math.floor((end + start) / 2);
  mergeSort(auxArray, start, middle, animations, array);
  mergeSort(auxArray, middle + 1, end, animations, array);
  merge(array, start, middle, end, auxArray, animations);
}

function merge(array, start, middle, end, auxArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;

  while (i <= middle && j <= end) {
    animations.push({ type: "changeColorToSecondary", indices: [i, j] });
    animations.push({ type: "changeColorToPrimary", indices: [i, j] });

    if (auxArray[i] > auxArray[j]) {
      animations.push({
        type: "swapHeights",
        indices: [k],
        heights: [auxArray[j]],
      });
      array[k++] = auxArray[j++];
    } else {
      animations.push({
        type: "swapHeights",
        indices: [k],
        heights: [auxArray[i]],
      });
      array[k++] = auxArray[i++];
    }
  }

  while (i <= middle) {
    animations.push({ type: "changeColorToSecondary", indices: [i] });
    animations.push({ type: "changeColorToPrimary", indices: [i] });
    animations.push({
      type: "swapHeights",
      indices: [k],
      heights: [auxArray[i]],
    });
    array[k++] = auxArray[i++];
  }
  while (j <= end) {
    animations.push({ type: "changeColorToSecondary", indices: [j] });
    animations.push({ type: "changeColorToPrimary", indices: [j] });
    animations.push({
      type: "swapHeights",
      indices: [k],
      heights: [auxArray[j]],
    });
    array[k++] = auxArray[j++];
  }
}
