//for a given array of numbers ,print the square of each value using the foreach loop

nn=[54,63,7,6,47,65];
sqr=[];
nn.forEach(function(value,index,array){
sqr.push(value*value);
});

console.log(sqr);

