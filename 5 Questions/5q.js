//we are given an array of marks and we find out the students got mroe than 90 marks 
let marks=[89,89,67,68,91,49,58,99,70,68,23,98,99,]
let aboveninty=marks.filter(function(value,index,array){
return value>90
})
console.log(aboveninty)


