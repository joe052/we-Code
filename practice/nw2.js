function createCheckDigit(membershipId) {
  // Write the code that goes here.
  sum = 0;
  for(let i = 0; i < membershipId.length; i++){
    sum = sum + parseInt(membershipId[i]);
  }
  
  //return 0;
  console.log("sum is:");
  console.log(sum);
  if(sum > 9){
    console.log("two ore more digit value generated");

    let check = 0;
    let value = JSON.stringify(sum);
    for(let i = 0;i < value.length; i++){
      check = check + parseInt(value[i]);
    }
    console.log(`check digit is ${check}`);
  }
}

createCheckDigit("55555");