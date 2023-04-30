

// NAIVE SOLUTION

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let val of arr1) {
//     let currectIndex = arr2.indexOf(val ** 2);
//     if (currectIndex === -1) {
//       return false;
//     }
//     arr2.splice(currectIndex, 1);
//   }
//   return true
// }
// console.log(same([2, 5, 1,5], [1, 25,4, 4]));



