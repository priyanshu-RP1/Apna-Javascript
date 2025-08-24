/*Qs2. Write a code which can give grades to students according to their scores:
- 80–100 → Grade A
- 70–79 → Grade B
- 60–69 → Grade C
- 50–59 → Grade D
- 0–49 → Grade F
*/

let input = prompt("enter the marks u received ")
let marks=Number(input);
let grade;
if( marks > 80 && marks<100){
    console.log("Grade a ")
    grade="A"
}else if(marks >70 && mnarks<= 79){
    console.log("Grade B ")
    grade="B"
}else if(marks >60 && mnarks<=69){
    console.log("Grade C ")
    grade="C"
}else if(marks >= 50 && mnarks<= 59){
    console.log("Grade D ")
    grade="D"
}else if(marks <50){
    console.log("Grade F ")
    grade="F"
}


console.log(" your grade is ", grade);