//for in loop
//this is same like .in. in python used to  use objects inside the loop and print or work on them on by one   
//used for lists , string 

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
//-------------
//using to print the string data
let str="the name is ranjan op";
for(var pp of str){
  console.log(pp)
}
///-------------------------------------------------------------

//for in 
//uised to print values with paid and key like dictonaries 

// JavaScript
let student ={
  name:"Priyanshu ranjan",
  Age:19,
  cgpa:7.9,
  Result:true

}

for (var ll in student){
  console.log(student[ll], " : ", ll)
}
