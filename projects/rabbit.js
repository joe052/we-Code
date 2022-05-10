function dupFinder(nums){
  tortoise = nums[0];
  hare = nums[0];

  while(true){
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    //hare = nums[tortoise + 1];
    if(tortoise == hare)
      break
  }
  ptr1 = nums[0];
  ptr2 = tortoise;

  while(ptr1 != ptr2){
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1

  
}

//let list = [0,1,2,4,8,99,9,0];

function duplexer(list){
  let tortoise = list[0];
  let hare = list[0];

  while(hare && list[list.indexOf(hare)+1]){
    tortoise = list[list.indexOf(tortoise)+1];
    //tortoise = tortoise.next;
    hare = list[list.indexOf(hare)+2];
    //hare = hare.next.next;
    if(tortoise === hare){
      return true;
     // return tortoise;
      //break;
    }
    return false;
    //ptr1 = list[0];
    //ptr2 = tortoise;

    //while(ptr1 != ptr2){
     // ptr1 = list[ptr1];
    //  ptr2 = list[ptr2];
   // }

    //return ptr2;
  }
}

console.log(dupFinder([1,2,3,4,5,6,7,8,9,10,10,11,12]));
//console.log(ans);
//console.log(list[list.indexOf(8)+1]);