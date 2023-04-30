//helper method

function collectOddValues(array){
    let result=[]
    function helper(helperInput){
        if(helperInput.length===0)return ;
        if(helperInput[0]%2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(array)
    return result
}
console.log(collectOddValues([565,7,45,2,5,55,6,32,78,12,2,3]))



//Pure method


function collectOddValues(array){
    let newArray=[]
    if(array.length===0){
        return newArray
    }
    if(array[0]%2 !==0){
        newArray.push(array[0])
    }
    newArray=newArray.concat(collectOddValues(array.slice(1)))
    return newArray
}
console.log(collectOddValues([3,5,6,1,2,8,9,7,8,1,10]))