//q5 and next are for this topic 
//map in js 
// ⭐ MAP in JavaScript
// map() is used to create a NEW array by applying some operation
// on each element of the original array. 
// Important: The original array does NOT change!

arr=[2,3,4,5,6,7,8];
let arr2 = arr.map(item => {
  return item * 2
});
console.log(arr2)

//-------------------------------------------

//creates new array of elements that give true for a conditon 
arr1=[2,4,4,75,68,4,35,]
let newarr=arr1.filter(function(value,index,array){
    return(value%2==0)
})

console.log(newarr)

//exmaple for the filter in array js 
num=[0,1,2,3,4,5,6,6,7,8,9,"45","hrllo","chai pilo","namaste ","subh prabhat "];
let numfiltered=num.filter(function(value,index,array){
    return  typeof value==="number"
})
//will retun only the numbers not any word or letter or string ;

console.log(numfiltered)

//------
//reduce method 
//here we take multiple input and this method will be used to send one output  like 
let nnn=1;
suin=[3+7+2+3+4+5+6+7+7+8+9];
let suintotal=suin.reduce(function(acc,crr){//fir name acc can be cnaged and 2nd too first wil l always be the toal bagage and 2mnd crr will be always the current value 

  console.log(n++);
  return(acc+crr)
})

console.log(suintotal);//all total 


//---------------------------------
