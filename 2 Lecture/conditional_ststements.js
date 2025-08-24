//this is used to implement some conditon in the code 
// if //if else // else if // ternary operators 

age =22
let display;//if 
light_mode=true;
if(light_mode ==true){
    display="Light mode";
}
console.log(display)


// if else 
if(age>=18){
    console.log("your are an adult ");
} else{
    console.log("u r a minor ");
}

//short form for tjis 
if(1==2) console.log("both are same")

//else if 
//used for multiple conditions 

if (age >18 ){
    console.log("u are an adult ")
}else if(age>80){
    console.log("u r an  sernior cetizen ");
}else if (a<18){
    console.log("u r a noob");
}else{
    console.log("retry buddy ")
}


//ternary opersots , these are like short forms of if else 
    let age = 12;
let result= (age>18 )?"adult":"minor";