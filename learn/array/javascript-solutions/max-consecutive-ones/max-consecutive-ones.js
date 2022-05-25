var findMaxConsecutiveOnes = function maxConsecutiveOnes(arr) {
  let count = 0;
  let maximumCount = 0;

  //Check number of elements base case

  if (arr.length === 0) return maximumCount;
  if (arr.length === 1) return arr[0];

  for (const elements of arr) {
    if (elements === 1) {
      count++;
      if (count > maximumCount) {
        maximumCount++;
      }
    } else count = 0;
  }
  return maximumCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
