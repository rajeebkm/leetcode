/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let pointer = nums.length - 1;
  let newArray = [nums.length];
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      newArray[pointer] = nums[left] * nums[left];
      left++;
    } else {
      newArray[pointer] = nums[right] * nums[right];
      right--;
    }
    pointer--;
  }
  return newArray;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
