const maxLimit = 100;
const y = provRandom(maxLimit);

function provRandom(max){
  return Math.floor(Math.random()*max);
}

if( y < 50){
  console.log("you are lucky");
}else{
  console.log("bad karma!!");
}

console.log(y);