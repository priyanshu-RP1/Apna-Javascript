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

//slice , retuns a particular portion from the arry 
let arrr = [10, 20, 30, 40];
console.log(arrr.slice(1, 3)); // [20, 30]


console.log(arr.toString())// make the array as nornmal string 

//splice  changes orignal array (add , remove , replace )
//example = array.splice(startIndex, deleteCount, item1, item2, ...)
arrr.splice(2,2,38,48)
console.log(arrr);


//index of and lastindex of 
// Finds index of element.
let arr1 = ["a", "b", "c", "b"];
console.log(arr1.indexOf("b"));      // 1
console.log(arr1.lastIndexOf("b"));  // 3


//includes 
//- Checks if value exists → returns `true/false
let includes = [1, 2, 3];
console.log(includes.includes(2)); // true

//-- question for this are from 3rd in 4 

