// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  const textArray = text.split(" ");
  return textArray.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
}

// console.error.longestWord("The quick brown fox jumps over the lazy dog"); // 'jumps'

console.log(longestWord('The quick brown fox jumps over the lazy dog'))
