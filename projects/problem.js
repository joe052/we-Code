// let prob = [1,2,1,2,1,3,2,1];
let prob = [1,2,3,2,1,2,3,2,2,3,3,1,1,2,2,3,3,2,2,1,1,2,3,1,2]
let red = [];
let blue = [];
let black = [];

for(i = 0; i < prob.length;i++){
  if(prob[i] == 1){
    red.push(prob[i]);
    //console.log(red.length);
  }else if(prob[i] == 2){
    blue.push(prob[i]);
    //console.log(blue.length);
  }else if(prob[i] == 3){
    black.push(prob[i]);
    //console.log(black.length
  }
  
}

console.log(red.length);
console.log(blue.length);
console.log(black.length);

let r = red.length;
let b = blue.length;
let k = black.length;

if(r % 2 == 0){
  console.log('all red are paired');
  console.log(`number of red pairs is ${r/2}`);
  
}else{
  console.log('all reds are not paired');
  console.log(`paired socks are  ${parseInt(r/2)}`);
}

if(b % 2 == 0){
  console.log('\nall blue are paired');
  console.log(`number of blue pairs is ${b/2}`);
}else{
  console.log('\nall blue are not paired');
  console.log(`paired socks are  ${parseInt(b/2)}`);
}

if(k % 2 == 0){
  console.log('\nall black are paired');
  console.log(`number of black pairs is ${k/2}`);
}else{
  console.log('\nall black are not paired');
  console.log(`paired socks are  ${parseInt(k/2)}`);
}

//console.log(`Guys!! total number of red socks is &red);
//console.log(`Guys!! total number of blue socks is ${blue}`);
//console.log(`Guys!! total number of black socks is ${black}`);
console.log(red);
console.log(blue);
console.log(black);