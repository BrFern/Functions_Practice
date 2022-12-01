
/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// maxOfTwoNumbers = (num1, num2) => {
// // ADD YOUR CODE HERE
//   if ( num1 >= num2){
//     return num1
//   } else {
//     return num2
//   }
// };
// console.log(maxOfTwoNumbers())

// maxOfThree();

// /*
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
// maxOfThree = (num1, num2, num3) => {
//   if(num1 > num2 && num1 > num3) {
//     return num1
//   } else if (num2 > num1 && num2 > num3) {
//     return num2
//   } else if (num3 > num1 && num3 > num1) {
//     return num3
//   } else (num1 === num2 || num1 === num3 || num2 === num3) 
//      console.log(`Two of your numbers are the same! Please choose different numbers`)
  
// };
// console.log(maxOfThree(32, 71, 18))

// /*
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// */


//For this one, I looked at Total recall to try and figure out why my old code didn't work. I figured out I had forgotten to write it in a function. Whoops!

let vowels = ["a", "e", "i", "o", "u"];
isCharacterAVowel = (letter) => {
let input = letter.toLowerCase();
if(vowels.includes(input) === true) {
  return true
} else {
  return false
}
}

console.log(isCharacterAVowel("f"))


// /*
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// */

// sumArray = () => {
//   // ADD YOUR CODE HERE
// };

// /*
// 5.Write a function that returns the number of arguments passed to the function when called.
// */

// /*
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// */

// reverseString = () => {
//   // ADD YOUR CODE HERE
// };

// /*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */
// findLongestWord = () => {
//   // ADD YOUR CODE HERE
// };

// /*
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// */
// filterLongWords = () => {
//   // ADD YOUR CODE HERE
// };
