//creates new array of elements that give true for a conditon 
arr=[2,4,4,75,68,4,35,]
let newarr=arr.filter(function(value,index,array){
    return(value%2==0)
})

console.log(newarr)