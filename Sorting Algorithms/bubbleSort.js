function bubbleSort(arr){
  for(let i=arr.length;i>0;i--){
    for(let j=0;j<i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([5,8,1,6,9,-1]))


//ES6
function bubbleSort1(arr){
const swap=(arr,index1,index2)=>[arr[index1],arr[index2]]=[arr[index2],arr[index1]]
  for(let i=arr.length;i>0;i--){
    for(let j=0;j<i-1;j++){
      if(arr[j]>arr[j+1]){
       swap(arr,j,j+1)
      }
    }
  }
  return arr
}
console.log(bubbleSort1([5,8,1,6,9,-1]))







