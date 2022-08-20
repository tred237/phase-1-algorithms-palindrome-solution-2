function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

  if we reach the middle, and all the letters match, return true

  Input: "racecar"
  Input length divided by two: 3.5
  Iteration:
    Index 0 (less than 3.5, keep iterating)
    Index 1 (less than 3.5, keep iterating)
    Index 2 (less than 3.5, keep iterating)
    Index 3 (less than 3.5, keep iterating)
    Index 4 (not less than 3.5, stop iterating)
  For "racecar", our loop will iterate up to the middle "e"

  Input: "abba"
  Input length divided by two: 2
  Iteration:
    Index 0 (less than 2, keep iterating)
    Index 1 (less than 2, keep iterating)
    Index 2 (not less than 2, stop iterating)
  For "abba", our loop will iterate up to the first "b"


  r a c e c a r
  0 1 2 3 4 5 6
  i           j

  r a c e c a r
  0 1 2 3 4 5 6
    i       j

  r a c e c a r
  0 1 2 3 4 5 6
      i   j

  r a c e c a r
  0 1 2 3 4 5 6
        ij
*/

/*
  This creates a for loop that checks uses the indexes of the string to check to see if the letters match 
  from the each side of the string. If the index at the beginning of the string matches the index at the end of string,
  it will continue to the next comparison by adding 1 to the index at the start of the string and subtract one from the end of
  the string and compare those indexes. If a comparison does not match, it will break the loop and return false since it is not a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
