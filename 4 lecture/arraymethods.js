//arrays methods in javascript
 // push and pop , most used 

let arr=["singer","director","actor","animeator","writer"]  // main array 
console.log(arr)
//using op we can remove specified index value from the array 
arr.pop(4); // here we removed he wrong speleling animator 
console.log(arr)

arr.push("animator"); // added nee speel corrected animator 
console.log(arr)
//using push we can add a new vale at the end of the array

//-------------------------------------------------//
arr.unshift("human")// with unshift we can add something in the begining of array
console.log(arr)
arr.shift()//removed the first item in the array
console.log(arr)

//concat joijning two or more arrays
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]
