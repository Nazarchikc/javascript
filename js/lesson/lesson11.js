const arr = [1, 2, 3, 4, 5];
const squareArray = function (arr) {
  const array = [];
  for (const number of arr) {
    array.push(number ** 2);
  }
  return array;
};

const sumArray = function (arr, callback) {
  const newArray = callback(arr);
  console.log(newArray);
  let sum = 0;

  for (const num of newArray) {
    sum += num;
  }
  // console.log(sum);
  return sum;
};

const result = sumArray(arr, squareArray);
console.log(result);

