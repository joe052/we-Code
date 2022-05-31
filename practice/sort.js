function sorter(inArr){
  let n = inArr.length; e6
  let arr = [];

  for(let i = 0;i < n;i++){
    arr.push(inArr[i]);
  }
  //console.log(arr);

  for (let i =1;i < n; i++){
    let a = arr[i];
    let j = i - 1;
    
    while(arr[j] > a && j >= 0){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = a;
  }

  for(let i = 0;i < n; i++){
    console.log(arr[i]);
  }
}

let arr = [2,3,4,5,1,9,7,8];
sorter(arr);