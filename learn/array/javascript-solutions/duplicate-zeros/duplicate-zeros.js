var duplicateZeros = function duplicateZeros(arr) {
  var zeroes = 0;
  for (const i of arr) {
    if (i == 0) {
      zeroes++;
    }
  }
  var i = arr.length - 1;
  var j = arr.length + zeroes - 1;
  while (i != j) {
    insert(arr, i, j--);
    if (arr[i] == 0) {
      insert(arr, i, j--);
    }
    i--;
  }

  function insert(arr, i, j) {
    if (j < arr.length) {
      arr[j] = arr[i];
    }
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
