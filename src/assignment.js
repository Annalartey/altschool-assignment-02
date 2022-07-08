// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
let arrayOfNumbers = [2, 3, 4, 5, 6,10]
console.log("This is my array of numbers: " + arrayOfNumbers);

function sumOfNumbers(arrayOfNumbers) {
    // console.log (arrayOfNumbers.length)
    // console.log (arrayOfNumbers[0] + arrayOfNumbers[1] + arrayOfNumbers[2])
  let sum = 0;
  for( i=0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i]
  }
  return ("The sum of the numbers in this array is: " + sum)
}
sumOfNumbers(arrayOfNumbers)


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */


function countEvenNumbers(arrayOfNumbers) {
    let evenNumbers = arrayOfNumbers.filter((n) => n % 2 == 0);
  console.log("These are the even numbers in my array of numbers: " + evenNumbers)
  console.log("The number of even numbers in my array of numbers is: " + evenNumbers.length)
}

countEvenNumbers(arrayOfNumbers)


function countOddNumbers(arrayOfNumbers) {
    let oddNumbers = arrayOfNumbers.filter((n) => n % 2 == 1);
  console.log("These are the odd numbers in my array of numbers: " + oddNumbers)
  console.log("The number of odd numbers in my array of numbers is: " + oddNumbers.length)
}

countOddNumbers(arrayOfNumbers)


/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

