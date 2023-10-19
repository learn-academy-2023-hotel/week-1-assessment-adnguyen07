// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: The output was 5. The .push method outputs the new length of the array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output was 10. The .length property determines the number of character spaces a datum occupies.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The output was o. Referencing an index position will return the value occupying that position.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The output was Ruby. Since index = 1, referencing that position in the array returns Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. The .toUpperCase method works on strings, not arrays. Since weekendDays is an array, a TypeError was returned.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Typeof identifies a data type. Even though the values in the array are characters, the attached .length method will return a number .
