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

  let positive =   Number(pos.length / arr.length).toFixed(6);
  console.log(positive);
}

plusMinus([3,5,6,7,8,9]);