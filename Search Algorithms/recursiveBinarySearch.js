function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }
    let middleIndex= Math.floor((leftIndex+rightIndex)/2);
    if(target===arr[middleIndex]){
        return middleIndex;
    }
    if(target<arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }
}
    
}
console.log(recursiveBinarySearch([-1,3,6,8,9,10,25,55,100],100))
console.log(recursiveBinarySearch([-1,3,6,8,9,10,25,55,100],8))
console.log(recursiveBinarySearch([-1,3,6,8,9,10,25,55,100],300))