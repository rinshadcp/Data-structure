function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };
  let pivot = arr[start];
  let swapIndex = start;

  //assume that pivot element is always start element
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  //swap the pivot element from start to pivotPoint
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([8,4,-5,25,789,-26,89,100,5,6,1,-30,65]))