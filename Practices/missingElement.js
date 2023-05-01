function missingElement(arr, limit) {
  let isElement;
  let actualSum = 0;
  let miss;
  if (limit === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
   
      
      isElement = false;
    for (let j = 1; j <= limit; j++) {
      if (arr[i] === j) {
        isElement = true;
      }

     
      }
      if (isElement === false) {
        let expectedSum = (limit * (limit + 1)) / 2;

        miss = expectedSum - actualSum;
        console.log(actualSum, expectedSum);
        arr[i] = miss;
    }
  }
  return arr;
}
console.log(missingElement([3, 0, 2, 4], 4));
