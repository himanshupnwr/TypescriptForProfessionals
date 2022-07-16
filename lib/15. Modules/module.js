"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @returns true if the input string is a palindrome
 */
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
