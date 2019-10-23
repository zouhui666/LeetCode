//使用双层for循环，添加新数组，将对应的序号添加进来
var transpose = function(A) {
  var result = [];
  for(let i = 0; i < A[0].length; i++) {
      var newAry = [];
      for(let j = 0; j < A.length; j++) {
          newAry.push(A[j][i]);
      }
           result.push(newAry);
  }
  return result;
};