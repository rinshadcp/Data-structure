const array =[5,2,3,7,8,11,9,4,5,10]
console.log(array.sort((a,b)=>a-b)) //ascending order
console.log(array.sort((a,b)=>b-a)) //descending order

const names=['paandi','jimmy','peppy','usthad']
console.log(names.sort()) //alphabetical order

const object = [
    {name:'Paandi Durai',age:30},
    {
        name:'Jimmy',age:24
    },
    {
        name:'Peppy',age:28
    }
]

console.log(object.sort((a,b)=>a.age-b.age)) //ascending in the basic of age
console.log(object.sort((a,b)=>b.age-a.age))  //descending in the basic of age