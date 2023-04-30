function bubbleSort(array){
    let n= array.length
    let i,j,temp
    for(i=0 ; i< n ; i++){
      for(j=0 ; j< n ; j++){
        if( array[j] > array[j+1] ){
          temp= array[j]
          array[j]= array[j+1]
          array[j+1]=temp
        }
      }
    }
    return array
  }
  
  const array= [5,5,23,32,3,2,1,3,5,6]
  console.log(bubbleSort(array))



















  function bubbleSort(array){
    let n=array.length;
let temp;
    for(let i=0;i<n;i++){
    let currentValue= array[i]    
    for(let j=0;j<n-i-1;j++){
        if(array[j]>currentValue){
            let temp = array[j]
            array[j]= currentValue
            currentValue=temp
    }
    }
}
  }
  bubbleSort([2,5,7,6,9])