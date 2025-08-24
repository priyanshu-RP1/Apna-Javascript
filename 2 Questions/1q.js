//get a user input a number using prompt("eneter a number "). check if the number is multiple of 5 or not 

let input = prompt("Enter a number");

let num = Number(input);

if (isNaN(num)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (num % 5 === 0) {
  console.log(num + " is a multiple of 5");
} else {
  console.log(num + " is not a multiple of 5");
}