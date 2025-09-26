export function getQuickSortAnimations(array) {
  let animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(arr, low, high, animations) {
  if (low < high) {
    const p = partition(arr, low, high, animations);
    quickSort(arr, low, p - 1, animations);
    quickSort(arr, p + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push({ type: "changeColorToSecondary", indices: [j, high] });
    animations.push({ type: "changeColorToPrimary", indices: [j, high] });

    if (arr[j] <= pivot) {
      i++;
      animations.push({
        type: "swapHeights",
        indices: [i, j],
        heights: [arr[j], arr[i]],
      });
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  animations.push({
    type: "swapHeights",
    indices: [i + 1, high],
    heights: [arr[high], arr[i + 1]],
  });
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
