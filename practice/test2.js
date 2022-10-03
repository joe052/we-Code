function plusMinus(arr) {
  let x = arr.length;
  console.log(x);
  
  //sort the numbers from positive,negative and zeros
  let pos = [];
  let neg = [];
  let zero = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      pos.push(arr[i]);
    }
    else if(arr[i] === 0){
      zero.push(arr[i]);
    }else{
      neg.push(arr[i]);
    }
  }

  //do the math
  let positive =   Number(pos.length / arr.length).toFixed(6);
  let negative =   Number(neg.length / arr.length).toFixed(6);
  let zeros =   Number(zero.length / arr.length).toFixed(6);

  //log the answer
  console.log(positive);
  console.log(negative);
  console.log(zeros);
}

plusMinus([-4, 3, -9, 0, 4, 1]);