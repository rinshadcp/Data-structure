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