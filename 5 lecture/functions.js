// function is a block of code that performs a specific task , can be invokled whenever needed 

/*   function functionNameHere(){ here our work }
*/
function greet(a){//iske andar a ko paramter kaha jata hai jo humara input hota hai function ke time 
console.log("Namaste ",a," Ji")
}

let name=prompt("enter your name cutie ");
greet(name)//this can be said as calling function or invoking function 
//here our name will be given to the function and then funtion will greet us 



//just another example 

let a=Number(prompt("Enter a number "));
let b=Number(prompt("Enter a number again "));
let c=Number(prompt("Enter a number  last time "));

function add(a,b,c){
    let answer=a+b+c
    return answer;
}

let addedAnswer=add(a,b,c)
console.log(addedAnswer)

//idhar pehle humninput liya 
//fir ek fnction banaya 
//aur udhar se humne ek value return kiya aur wo humne save kiya with a variabke declaration ke wakt aur data ke jagah pe humne function karke calkrke data de diya aapna /
//fir print karwa diya '

