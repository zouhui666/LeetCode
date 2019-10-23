var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while(cur !== null) {
      let listTemp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = listTemp;
  }
     return prev;
 };