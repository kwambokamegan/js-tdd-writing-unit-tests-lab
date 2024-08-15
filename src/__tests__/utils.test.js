// Your tests here
//Passes if the function returns true for a palindrome and false if otherwise
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  it('returns true if the input is a palindrome and  is case-insensitive', () => {
    //Arrange
    const word1 = 'Racecar';
    const word2 = 'car';
    //Act
    const result = isPalindrome(word1);
    //Assert
    expect(result).toBe(true);
  });
  it("throws an error if the input has any non-alphabetic characters", () => {
    const word = "race car";

    expect(() => isPalindrome(word)).toThrow();
  });
  it("throws an error if the input is an empty string", () => {
    const word = "";

    expect(() => isPalindrome(word)).toThrow();
  });
});