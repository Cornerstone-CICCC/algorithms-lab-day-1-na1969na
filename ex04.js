// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  return arr.reduce((acc, str) => {
    if (acc[str]) acc[str]++;
    else acc[str] = 1;

    return acc;
  }, {});
}

console.log(countOccurrences(["apple", "banana", "apple"])); // { apple: 2, banana: 1 }
