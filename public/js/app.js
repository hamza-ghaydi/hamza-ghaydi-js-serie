// / Exercise 1:
//  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. 
// Call the function with different names.

let name = prompt("give me your name: ")
let age = prompt("how old are you: ")

function greet() {
    console.log("Hello " + name + " Welcome! At " + age + " years old, you’re at an exciting point in your journey.");
    
}

console.log(greet());


// Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. 
// Call the function with different arrays.

const sumNumbers = (number , number2) => {
    return number + number2
}
let result = sumNumbers (32,45)
console.log(result);




// Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. 
// Use an if-else statement. 
// Call the function with different numbers.


function isEven(number) {
    if (number % 2 == 0) {
        console.log(`${number} is even`);
    }else {
        console.log(`${number} is odd`);
    }
}
isEven(prompt("give me number to check if is odd or even"));



// Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a string as a parameter and prints 
// whether the string is a palindrome (reads the same backward as forward) to the console. 
// Ignore spaces and case. Use loops and conditional statements. 
// Call the function with different strings.


function isPalindrome(str) {
  let lower = str.toLowerCase().trim()
    const reversed = lower.split('').reverse().join('');

    return lower === reversed;
}
console.log(isPalindrome(' Racecar          '));
 
// Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. 
// Use an if-else statement. Call the function with different numbers.



function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is large than ${num2}`);
    }else
    console.log(`${num1} is small than ${num2}`);

}
maxOfTwo(20, 30);


// Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints 
// the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

let sum = 0
let numbers = []
const ask = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i]
    }
    return console.log(sum);

}
ask([1,2,3,4,5,6,7,8,9,10])



// Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter 
// and prints the factorial of that number to the console. 
// Calculate the factorial without using recursion. Call the function with different numbers.

function factorial(num) {

for (let index = num - 1; index > 1; index--) {
  num *= index
}
console.log(num);
}
factorial(4);

// Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. 
// Use an if-else statement. Call the function with different characters.

function isVowel(character) {
  let vowel = ["a", "e", "i", "o", "u"]
  character = character.toLowerCase()
  if (vowel.includes(character)) {
    console.log(`${character} is a vowel`);
  }else{
    console.log(`${character} is a not vowel`);
  }
}

isVowel("I")

// Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. 
// Use the Math.max function. Call the function with different arrays.

function largestInArray(params) {
  params = [2,4,1,23,45,67,3]
  const largest = Math.max(...params);
  console.log(`the largest number in the array is: ${largest}`);
}
largestInArray()


// Exercise 12: Prime Number Checker
// Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.

function isPrime(x) {
  let checkpr = "prime"

  for (let index = 2; index < x; index++) {
    if (x % index == 0) {
      checkpr = "maaachi prime"
    }
  }

  console.log(checkpr)
}

isPrime(4)  

// Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.

function sumOfDigits(x) {
  let total = 0;
  let i = 0;

  while (i < String(x).length) {
    total += parseInt(String(x).split("")[i]);
    i++;
  }

  console.log(`total = : ${total}`);
}
sumOfDigits(752)

// Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.

function arrayIntersection(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
console.log(arrayIntersection([1, 2, 3, 7], [3, 7, 5, 1]));


// Fibonacci Series

const number = 10;
function Fibonacci() {
  let a = 0, b = 1, c;
  
  for (let i = 1; i <= number; i++) {
      console.log(a);
      c = a + b;
      a = b;
      b = c;
  }
}

Fibonacci();

