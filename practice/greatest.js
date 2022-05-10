const nums = [1,12,21,34,1,20,7,87,3,15];
let x = 0;

for(i of nums){ 
  //x = i;
  if(i > x){
    x = i;
  }
}
console.log(x);