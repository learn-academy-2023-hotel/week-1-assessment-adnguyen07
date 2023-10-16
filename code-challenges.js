// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// Utilize input of two strings. First string is fruit1 = "apple". Second string is fruit2 = "banana".
// Desired output is the string with more characters. It should be "banana".
// Will use .length method to assess the number of characters in each string.
// Will use a relational operator to compare those values.

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }
// else{
//     console.log(fruit2)
// }

// The output was "banana".

// Input two strings. First string is fruit1 = "cherry". Second string is fruit2 = "kiwi".
// Desired output is the string with more characters. It should be "cherry".
// Will use .length method to assess the number of characters in each string.
// Will use a relational operator to compare those values.

if(fruit1.length > fruit2.length){
    console.log(fruit1)
}
else{
    console.log(fruit2)
}

// The output was "cherry".

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// Utilize the input of two arrays. They are padres1984WorldSeriesRuns and padres1998WorldSeriesRuns.
// Desired output is the length of two arrays combined. It should be 9.
// Will use .concat method to combine the two arrays.
// Will declare a variable of the combined arrays.
// Will use .length method to assess the length of the combined array.

var comboArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(comboArrays.length)

// Output was "9".

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:

// Utilize input of a string. The string is currentCohort = "Golf 2023".
// Will use .split method to convert the string into an array.
// Will use .reverse method to reverse the order of the values in the array.
// Will use .join method to convert the array values back into a string.
// Will declare a variable that uses these methods on the original string.

var revCohort = currentCohort.split("").reverse().join("")
console.log(revCohort)

// Output was "3202 floG".

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:

// Utilize input of an array. The array is stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10].
// Make a loop to evaluate each of the values in the array.
// Use modulo to return the remainder from each of the array values.
// Use an equality operator to determine if the remainder is divisible by 2.
// Use a bang operator to look for a value not divisible by 2.
// Create a conditional statement with "if" to output only the numbers that don't return a remainder of 0.

for(let i = 0; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0){
        console.log(stockExchange[i])
    }
}

// Output was "13, 5, -5, 27" .