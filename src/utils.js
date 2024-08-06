export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    if (word === "") {
      return false; // empty string is not a palindrome
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must only contain alphabetic characters");
    }
  
    const reversedWord = word.split("").reverse().join("").toLowerCase();
    return word.toLowerCase() === reversedWord;
  }