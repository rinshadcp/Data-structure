function splitArray(arr) {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  if (totalSum % 3 !== 0) {
    return "The array cannot be split into three subarrays with equal sum";
  }

  const targetSum = totalSum / 3;
  let subarrays = [[], [], []];
  let subarraySum = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    let added = false;
    for (let j = 0; j < subarrays.length; j++) {
      if (subarraySum[j] + element <= targetSum) {
        subarrays[j].push(element);
        subarraySum[j] += element;
        added = true;
        break;
      }
    }

    if (!added) {
      return "The array cannot be split into three subarrays with equal sum";
    }
  }

  return subarrays;
}

const arr = [4, 1, 1, 1, 5, 1, 1, 1, 2, 1];
const subarrays = splitArray(arr);
console.log(subarrays);
