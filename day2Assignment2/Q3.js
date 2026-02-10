// 3 Strings
// Concepts: string methods


// Write difference between == and === in java script with examples.

// "hello world" convert to title case. 

/*
Difference between == and ===

== checks for value equality
=== checks for value and type equality

Example:
*/

console.log("123" == 123)
console.log("123" === 123)
console.log("123" == "123")
console.log(123 === 123)

// Title case

let str = "hello world"
str = str.charAt(0).toUpperCase() + str.slice(1)
console.log(str)

