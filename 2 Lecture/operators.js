//operators 
 //this is used to perform soem operation on data 

//arithemetic operators 
console.log(12+3)
console.log(12-3)
console.log(12*3)
console.log(12/3)  //division
console.log(12%3) // remainder 


//increment and decrement  also kmnown as unary operators 
a=13
console.log(a++) ///ptint then add 1 
console.log(++a) // add 1 then print 
//same with subtraction

//comparision operators
console.log(2 == 2) //cheks if equal 
console.log(2 === 2) //cheks if equal strictly even the data type should be same  
console.log(2 !=  2) //cheks if not qual to
console.log(2 !==  "2") //cheks if not qual to stcitly 

console.log(2 < 1) //smaller than 
console.log(2 <= 10) //smaller than or eual to
console.log(2 > 1) //greater than than 
console.log(2 >= 10) //smaller than or eual to


//logical operatores
// and && |      ! not

a=17
b=22
console.log(a>5  && b<8) //and operators both should be correct then true or else false 
console.log(!(a>5  && b<8)) //if we get naser true but want to show it false then use not operatos !


//ternary opersots , these are like short forms of if else 
    let age = 12;
let result= (age>18 )?"adult":"minor";
//if the answer is corret the first assignment will work and rulst will get adult , or else minor 
//its like (if age is less than 18) ?means then do it adult else: minor

//bitwise we learn later in advanced 
