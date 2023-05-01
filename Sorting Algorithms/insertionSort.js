function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currentValue=arr[i]
        for(var j=i-1;j>=0&&arr[j]>currentValue;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=currentValue
    }
    return arr;
}
console.log(insertionSort([8,6,2,4,-9,5,31,55,10]))


//Using while loop
function insertionSort1(arr){
    for(let i=1;i<arr.length;i++){
        let currentValue=arr[i]
        let j=i-1;
        while(j>=0&&arr[j]>currentValue){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=currentValue;
    }
    return arr;
}

console.log(insertionSort1([6,2,4,-9,5,31,55,10]))