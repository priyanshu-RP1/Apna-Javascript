// 📦 JavaScript Data Types — Hands-on Exploration

// 🧱 1. Primitive Types

// Number
let age = 25;
console.log("Number:", age); // Output: 25

// String
let name = "Priyanshu";
console.log("String:", name); // Output: Priyanshu

// Boolean
let isLearning = true;
console.log("Boolean:", isLearning); // Output: true

// Undefined (declared but not assigned)
let score;
console.log("Undefined:", score); // Output: undefined

// Null (explicitly no value)
let result = null;
console.log("Null:", result); // Output: null

// BigInt (for very large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber); // Output: 1234567890123456789012345678901234567890n

// Symbol (unique identifier)
let id = Symbol("userID");
console.log("Symbol:", id); // Output: Symbol(userID)


// 🧩 2. Reference Types

// Object
let user = {
  username: "Priyanshu",
  level: "Advanced",
  isActive: true
};
console.log("Object:", user); // Output: { username: 'Priyanshu', level: 'Advanced', isActive: true }

// Array
let topics = ["Variables", "Operators", "Functions"];
console.log("Array:", topics); // Output: [ 'Variables', 'Operators', 'Functions' ]

// Function
function greet() {
  return "Hello, JavaScript!";
}
console.log("Function:", greet()); // Output: Hello, JavaScript!

// Date
let today = new Date();
console.log("Date:", today); // Output: current date and time

// RegExp
let pattern = /\d+/; // matches one or more digits
console.log("RegExp test:", pattern.test("123abc")); // Output: true


// 🧠 typeof Operator — Check Data Type
console.log("typeof age:", typeof age);           // number
console.log("typeof name:", typeof name);         // string
console.log("typeof isLearning:", typeof isLearning); // boolean
console.log("typeof score:", typeof score);       // undefined
console.log("typeof result:", typeof result);     // object (quirk!)
console.log("typeof bigNumber:", typeof bigNumber); // bigint
console.log("typeof id:", typeof id);             // symbol
console.log("typeof user:", typeof user);         // object
console.log("typeof topics:", typeof topics);     // object (arrays are objects)
console.log("typeof greet:", typeof greet);       // function