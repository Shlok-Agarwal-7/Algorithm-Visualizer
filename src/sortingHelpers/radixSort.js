function getradixSortAnimations(arr) {
  // Find the maximum number to know number of digits
  const maxNumber = getMax(arr);
  // Create a shallow copy where the sorted values will be kept
  let sortedArr = [...arr];
    
  let animations = [];

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    // Get the Count sort iteration
    const sortedIteration = countingSort(sortedArr, exp,animations);
    sortedArr = sortedIteration;
  }


  return animations;
}

function countingSort(arr, exp) {
  const length = arr.length;
  let output = Array(length); // output array
  let count = Array(10).fill(0, 0);

  // Store count of occurrences in count[]
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

function getMax(arr) {
  const length = arr.length;
  let mx = arr[0];
  for (let i = 1; i < length; i++) {
    if (arr[i] > mx) mx = arr[i];
  }
  return mx;
}
