//it is a function to execture for each element in the array 

// Same chocolates array
let chocolates = ["Dairy Milk", "KitKat", "Perk"];

// Using forEach
// forEach takes a function, and that function automatically gets:
// 1. item → current element
// 2. index → current position
// 3. array → the full array
chocolates.forEach(function(item, index, array) {
    console.log("Chocolate:", item);     // print the current chocolate
    console.log("Position:", index);     // print its position
    console.log("Full box:", array);     // print the entire array
    console.log("----");
});


