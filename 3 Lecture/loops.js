//loops are used to execute a piece of code again and again
//for loop 
//for(declaration,conditon,incrment ){ work to do }
let m = prompt("Enter the Number of Multiplication u need ");
let mul = Number(m);
for (let i = 1; i <= 10; i++) {
    console.log(mul, " X ", i, ' = ', mul * i)

}

//for loop example priting ulta numBERS
var input = prompt("Enter a number to start negative counting numbers from ");
for (var num = Number(input); num != 0; num--) {
    console.log(num)
}

//-----------------------------------------------------------------
//while loop 
//this works like give condion and work thats it 
// while (a>10){ here the work}

var ff = prompt("Enter a number ")
let numm = Number(ff);
while (numm <= 100) {
    console.log(numm++)
}
console.log("while loop example , if enter a nuber and its under 100 it will print from the number u gave to 100 and then the sentence written here ")

//printing tables uisng the while loop
//we will use the old data hwich was ued in for loop in the tables itself 
let a =1
while(a<=10){
    console.log(mul, " X ", a, ' = ', mul * a);
    a++;
}


//-------------------------------------------------------------------------------
//do while loop
//in this it would do at least once the work and then check if the condions are met or not 
// do{ hhahaha}while(a>1);

//here is an exmaple 
let aa =prompt("Enter a  number ")
let nummm=Number(aa)
do{
    console.log(nummm-1)
    nummm--;
}while(nummm>=0);