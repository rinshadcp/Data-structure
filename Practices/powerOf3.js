function powerOfThree(limit){
    let power;
    let powerArray=[]
    for(let i=0;i<=limit;i++){
        if(i===0){
            power=1
        }else{
        power *=3;
       }
       powerArray.push(power)
    }
    return powerArray
}
console.log(powerOfThree(5))