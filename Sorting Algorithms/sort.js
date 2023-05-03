function insertion(arr){
   for(let i=1;i<arr.length;i++){
    let current=arr[i]
    for(var j=i-1;j>= 0 && arr[j]>current;j--){
        arr[j+1]=arr[j]
    }
    arr[j+1]=current
   } 
    return arr
}
console.log(insertion([7,8,5,-5,4,3,7]))