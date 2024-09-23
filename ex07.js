// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  const sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
