// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for a palindrome with mixed case", () => {
    expect(isPalindrome("RaCeCaR")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for a string with non-alphabetic characters", () => {
    expect(() => isPalindrome("hello!")).toThrow();
  });

  it("throws an error for a non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});