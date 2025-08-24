//for in loop
//this is same like .in. in python used to  use objects inside the loop and print or work on them on by one 

const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry

//here is an exmaple 
var friends=['Hemraj','harish','unkown','humans','living','somewhere']

for(var friend of friends){
    console.log(friend) // one by one after the loops reperats the data wil be updated by next item in the list friendds 
}



///-------------------------------------------------------------

//for in 
// JavaScript
const person = { name: 'Priyanshu', age: 22 };
for (const key in person) {
  console.log(key, person[key]);
}
