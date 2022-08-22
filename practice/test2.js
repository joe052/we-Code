const x = 5;
const y = Math.random()* 10;
function provRandom(){
  return x *y;
}

if(provRandom()== 0){
  console.log("you are lucky");
}else{
  console.log("bad karma!!");
}