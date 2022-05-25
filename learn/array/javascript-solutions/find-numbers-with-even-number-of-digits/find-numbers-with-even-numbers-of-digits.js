/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitCount = 0;

  for (let elements of nums) {
    let digit = 0;
    while (elements > 0) {
      digit++;
      elements = parseInt(elements / 10);
    }
    if (digit % 2 == 0) {
      evenDigitCount++;
    }
  }

  return evenDigitCount;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
