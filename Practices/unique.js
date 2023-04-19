

function uniqueElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}
console.log(uniqueElement([5, 8, 5, 10, 8, 7]));

// Using filter
const arr = [8, 76, 76, 8, 100, 101, 200, 101, 10];
const uniqueArray = arr.filter(
  (value) => arr.indexOf(value) === arr.lastIndexOf(value)
);
console.log(uniqueArray);

// if we want to delete the duplicate elemnts in an array

const array = [75, 75, 74, 26, 8, 6, 8, 10];
const distinctArray = [...new Set(array)];
console.log(distinctArray);
