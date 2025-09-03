/*ake a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

let userinputt = Number(prompt("Enter a Number Babu :- "));

let dup = 1;
let newarr = [];

// make new array [1, 2, 3, ..., n]
while (dup <= userinputt) {
    newarr.push(dup);
    dup++;
}

// sum using reduce
let sumofall = newarr.reduce(function (total, value) {
    return total + value;
}, 0);

console.log(sumofall, "this is the total of all numbers");

// product using reduce
let productofall = newarr.reduce(function (total, value) {
    return total * value;
}, 1);

console.log(productofall, "this is the product of all numbers");


