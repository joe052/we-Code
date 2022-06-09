function isSastry(number){
  let status = false;
  
  //establishinh the two numbers
  let x = number;
  let y = parseInt(number)+ 1;

  //concat to create final number
  let z = parseInt(x.toString().concat(y));
  console.log(z);

  //check squareroot
  const rt = 0.5;
  let sqrt = Math.pow(z,rt);
  console.log(sqrt);

  //checking if square root is whole number  
  //picking whole number only
  let tst = parseInt(sqrt);
  if(sqrt % tst === 0){
    status = true;
  }
  
  console.log(tst);

  //return answer
  return status;
}

console.log(isSastry(13));