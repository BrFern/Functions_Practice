
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

// let vowels = ["a", "e", "i", "o", "u"];
// isCharacterAVowel = (letter) => {
// let input = letter.toLowerCase();
// if(vowels.includes(input) === true) {
//   return true
// } else {
//   return false
// }
// }

// console.log(isCharacterAVowel("f"))


// /*
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// */

// // How to add items together from an array
// array.forEach(item => mySet.add(item))

// // alternative, without anonymous arrow function
// array.forEach(mySet.add, mySet)




// sumArray = (numbers) => {
//   let numArray1 = [numbers]
//   numArray1.forEach(number => Math.sum(number + number))

// };
// console.log(sumArray(numArray1[2,6,7]))

// multiplyArray = (numArray2) => {
//   let numArray2 = []


// };


// /*
// 5.Write a function that returns the number of arguments passed to the function when called.
// */

// numOfArgs = (...args) => {
//   return args.length;
// }

// console.log(numOfArgs(3, 'w', {'doc': 'name'}))


// function callArguments (a, b, c) => {
//   console.log(arguments.length);
// }
// callArguments()

// /*
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// */

//Notes for self
//The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

// let string1 = "reverse me!"

// reverseString = (str) => {
//   return str.split("").reverse().join("");
  
// };

// console.log(reverseString(string1))

// /*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */

// findLongestWord = (wordList) => {
//   let longestWord = wordList [0];
//   for(let i =1; i < wordList.length; i++) {
//       if(wordList[i].length > longestWord.length) longestWord = wordList[i];
// }
// return longestWord
// }

// let wordList1 = ["bounce", "anti-establishment", "water", "cheetos", "tube"]

// console.log(findLongestWord(wordList1))
// /*
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// */
// filterLongWords = () => {
//   // ADD YOUR CODE HERE
// };
