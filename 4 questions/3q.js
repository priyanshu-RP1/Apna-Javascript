/* Qs. Create an array to store companies → "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/ 
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

companies.shift()
companies.splice(1,1,"OLA")
companies.push("Amazon")

console.log(companies)

//all done
//chapter 4 compleate 
