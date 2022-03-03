function duplexer(list){
//const getIntersectionNode = (list) => {
    let tortoise = list[0], hare = list[0], curr = list[0];
    while (curr) {
        if (!list[list.indexOf(curr)+1]) {
            curr.next = list[list.lastIndexOf(list)];
            //list[list.indexOf(curr)+1] = list[list.lastIndexOf(list)];
            break;
        }
        curr = curr.next;
        //curr = list[list.indexOf(curr)+1];
    }
    while (tortoise && hare) {
        tortoise = tortoise.next;
        //tortoise = list[list.indexOf(tortoise)+1];
      
        //hare = hare.next.next;
        //hare = list[list.indexOf(hare)+2];
      
        hare = hare.next ? hare.next.next : null;
       //hare = list[list.indexOf(hare)+1] ? list[list.indexOf(hare)+2] : null;
        if (tortoise === hare) {
            break;
        }
    }
    while (list[0] && hare) {
        if (list[0] === hare) {
            break;
        }
        list[0] = list[0].next;
        //list[0] = list[1];
      
        hare = hare.next;
        //hare = list[list.indexOf(hare)+1];
    }
    if (curr) curr.next = null;
    //if(curr) list[list.indexOf(curr)+1] = null;
    return hare;
}
console.log(duplexer([1,2,3,4,4]));