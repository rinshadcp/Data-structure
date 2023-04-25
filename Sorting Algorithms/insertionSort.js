
function insertionSort(arr) {
    let i,j
    for ( i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (j = i-1 ; arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

const arr =[9,-7,6,5,4,4,43]
const result = insertionSort(arr)
console.log(result);










// const insertionSort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let j = i - 1;
//     let current = array[i];
//     while (array[j] > current) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;
// };

// let arr = [18, 48, 58, 9, 4, 67, 30];
// const result = insertionSort(arr);
// console.log(result);
// result.forEach((element) => {
//   console.log(element);
// });