/* Qs. For a given array with prices of 5 items →
[250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them.
Change the array to store final price after applying offer
 */
let cost_price =[250, 645, 300, 900, 50]
var selling_price=[];
for(var spt of cost_price){
selling_price.push(spt*0.9);
}
console.log(selling_price)

