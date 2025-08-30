/*  Easy
Make an array of 5 animals: `["Cat", "Dog", "Elephant", "Tiger", "Lion"]`.
 Use `forEach` to print each animal’s name. */

animals=["Cat", "Dog", "Elephant", "Tiger", "Lion"]

animals.forEach(function(item,index,array){
    console.log(item)
})


/*Medium
Make an array of numbers: `[10, 20, 30, 40, 50]`.
Use `forEach` to calculate the **sum** of all numbers and print it. */


numbers=[10, 20, 30, 40, 50];
sum=0;
numbers.forEach(function(item,index,array){
    sum=sum+item
});
console.log(sum);



/*Hard
Make an array of numbers: `[1,2,3,4,5,6,7,8,9,10]`.
 Use `forEach` to create a **new array** that contains only the even numbers `[2,4,6,8,10]`.
*/

numbers = [1,2,3,4,5,6,7,8,9,10];

even=[]
numbers.forEach(function(item,index,array){
    if(item%2===0 ){
        even.push(item)
    }
})
console.log(even)