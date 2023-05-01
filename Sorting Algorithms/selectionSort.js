//  O(n^2)

function selectionSort(arr){
for(let i=0;i<arr.length;i++){
    let lowest = i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[lowest]){
            lowest=j
        }
   
   
    }
    if(i!==lowest){
        let temp=arr[i]
        arr[i]=arr[lowest]
        arr[lowest]=temp
}
}
return arr;
}
console.log(selectionSort([5,8,1,6,9,7,10]))




// Using ES6

function selectionSort1(arr){
    const swap= (array,indx1,indx2)=>{
        [array[indx1],array[indx2]]=[array[indx2],array[indx1]]
    }
    for(let i=0;i<arr.length;i++){
        let lowest =i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest=j;
            }
        }
        if(i!==lowest){
            swap(arr,i,lowest)
        }
    }
    return arr
}
console.log(selectionSort1([7,9,2,6,-4,6,8,70,14]))