let myStr = ['a','b','c','d','e'];
let last = myStr.length - 1;
//let first = myStr[0];
//let diff = last - first;
let soln = [];
//soln.push(3);
//soln.push(5);

for(let i = last; i > -1; i--){
  //console.log(myStr[i]);
  soln.push(myStr[i]);
}
console.log(soln);
