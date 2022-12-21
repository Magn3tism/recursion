function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];

  while (right.length && left.length) {
    if (left[0] < right[0]) merged.push(left.shift());
    else merged.push(right.shift());
  }

  if (right.length) {
    right.forEach((ele) => {
      merged.push(ele);
    });
  }

  if (left.length) {
    left.forEach((ele) => {
      merged.push(ele);
    });
  }

  return merged;
}
