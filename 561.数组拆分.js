var arrayPairSum = function(nums) {
  var sum = 0;
  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
}
//先按从小到大的顺序排列，取偶数项