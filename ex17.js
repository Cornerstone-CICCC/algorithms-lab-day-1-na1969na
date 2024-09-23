// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  const frequency = {};

  arr.forEach(str => {
    frequency[str] = (frequency[str] || 0) + 1;
  });

  let mostFrequentString = '';
  let maxCount = 0;

  for (const str in frequency) {
    if (frequency[str] > maxCount) {
      maxCount = frequency[str];
      mostFrequentString = str;
    }
  }

  return mostFrequentString;
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'