function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([9, 3, 34, 45, 434, -2, 786], 786));
console.log(linearSearch([9, 3, 34, 45, 434, -2, 786], -2));
console.log(linearSearch([9, 3, 34, 45, 434, -2, 786], 45));

// Big-O = O(n)


//example of for ..of

function linearSearchs(array,value){
  for(const[index,val] of array.entries()){
    if(value===val)return index
  }
  return -1
}
console.log(linearSearchs([21,56,3,45,46,2,0,78],100))