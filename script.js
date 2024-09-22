// Write a Function to determind whether a given string is a palindrome or not. A Palindrome is a word, phrase, number or other sequence of charactor that reads the same forward and backword, ignoring spaceses, punctuation, and capitalization.

const isPalindrome = (str) => {
str = str.toLowerCase().replace(/\W/g,"");
let r_str = str.split("").reverse().join("");
console.log(r_str);
return str === r_str ? true : false;
}
console.log(isPalindrome("A man, a plan, a canel")); // output: true
console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello")); // output: False


