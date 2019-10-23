var relativeSortArray = function(arr1, arr2) {
  let newArr1 = [];
  let newArr2 = [];
  for(let i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) > -1) {
          newArr1.push(arr1[i])
      }else {
          newArr2.push(arr1[i])
      }
  }
  newArr1.sort(function(a, b) {
      return arr2.indexOf(a) - arr2.indexOf(b)
  })
  newArr2.sort((a, b) => a - b)
  return newArr1.concat(newArr2)
};