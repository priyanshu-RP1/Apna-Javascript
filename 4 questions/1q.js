/* Qs. For a given array with marks of students →
[85, 97, 44, 37, 76, 60]
Find the average marks of the entire class
*/

let students =[85, 97, 44, 37, 76, 60]
let average=0;
for(let l of students){
    average=average+l
}
average = average/students.length
//console.log("average = ",average/students.length)
console.log("average = ",average)
