var convertToTitle = function(n) {
  var ary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var str = '';
   while(n !== 0) {
     n--;
     let c = n % 26;
     str = ary[c] +str;
     n = parseInt( n / 26);
   }
  return str;
}