// Your code here
export function isPalindrome(word) {
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input");
  }
  if (word === '') {
    return false;
  }
  const wordInReverse = word.split('').reverse().join('');
  if (wordInReverse.toLowerCase() == word.toLowerCase()) {
    return true;
  }
}