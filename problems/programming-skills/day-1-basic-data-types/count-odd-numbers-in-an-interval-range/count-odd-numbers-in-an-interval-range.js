/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let numElements = high - low + 1;
  // let arr = [];
  // for (let i = low; i <= high; i++) {
  //   arr.push(i);
  // }
  // console.log(
  //   "The array of elements is in the range (" + low + ", " + high + ") is:",
  //   arr
  // );

  let oddCounts = 0;
  if (numElements % 2 == 0) {
    oddCounts = numElements / 2;
  } else {
    if (low % 2 != 0 || high % 2 != 0) {
      oddCounts = numElements / 2 + 1;
    } else {
      oddCounts = numElements / 2;
    }
  }
  return Math.floor(oddCounts);
};

console.log(countOdds(3, 7));
