var twoSum = function(numbers, target) {
  let low = 0, high = numbers.length - 1;
  while(low < high) {
      var sum = numbers[low] + numbers[high];
      if(sum == target) {
          return [low + 1, high + 1];
      }else if(sum > target) {
          --high;
      }else {
          ++low;
      }
  }
  
}