// STRINGS
// Variable - Most basic building block
// Variables - Store, access, modify === value
// Declare, assignment operator, assign value
// Rules
// - Can contain digits, letters, underscore and $ sign
// - must start with a letter, underscore _ or $
// - cannot be keywords
// - cannot start with a number
// - case sensitive : FullName is not same as fullName nor fullname
// - camelCase or camel_case or _camelCase
let myName = 'Brian Koech'
let address, state, postcode

address = '25 A Sussex Street'
state = 'Western Australia'
postcode = 6061

console.log(myName, address, state, postcode)

// Modify

myName = 'Koech Kimurgor'
address = '15 Davenport St'
console.log(myName, address, state, postcode)

// Other key words to declare variables include var and const
// Var was replaced by var and let i.e var is deprecated.
// const are used to define variables that cannot be reassigned

const pi = 22 / 7
let radius = 22
let circleArea = pi * (radius * radius)
console.log(circleArea)

// Let's try to assign const pi
// pi = 3.1; // Generates an Error

// Strings
// String can be created by using both double quotes ("My name is Brian")
// Or by using single quotes ('My name is Brian')
// You cannot mix them

// What if therre is a singl word inside the senteces eg. Brian's?
// Either escape 'Brian\'s car is awesome
// OR use double quotes outside and single ' inside
let mySentence = "Brian's car is awesome"
let mySecondSentence = "Brian's car is awesomee"
console.log(mySentence)
console.log(mySecondSentence)

// String concatanation - Combining string values
// `` - Use backticks (template strings) easier option for dealing with strings
const firstName = 'Brian'
const lastName = 'Koech'
let fullName = firstName + ' ' + lastName

console.log('Hello there, your full name is: ' + firstName + ' ' + lastName)
console.log(fullName)

// Create a website using strings
const website = 'google'
const url = 'https://www.' + website + '.com'

console.log(url)

// Numbers

// Loosely Typed = You don't have to declare variable types

const numberY = 34 // Integers
let pants = 2.466 // Decimal aka Floating point numbers

console.log(numberY * pants)

// Basic math operations
const number1 = 10
const number2 = 5

const add = number1 + number2
const sub = number2 - number1
const mult = number1 * number2
const div = number2 / number1

console.log(add, sub, mult, div)

// +=, -=, /=, ++, --, %
// Operate on variable in one line
// Modulus % gives the reminder of a division

let number = 50
console.log(number)
number += 5
console.log(number)
number -= 10
console.log(number)
number /= 5
console.log(number)
number *= 20
console.log(number)
number = number % 11
console.log(number)
number++
console.log(number)
number--
console.log(number)

// Implicit type conversion

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault()
  let value = document.getElementById('amount').value
  let name = document.getElementById('name').value
  value = parseInt(value)
  console.log('Hello ' + name + ' ' + 'You entered ' + value)
})

// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Funtions, Objects

// typeof - Operator (typeof variable) (typeof value)

// String
const text = 'Some text'
// Number
const numberX = 45
// Boolean
let valueA = true
let valueB = false
// Null
const result = null
// Undefined
let valueC
// Symbol(ES6)
console.log(typeof text)
console.log(typeof number)
console.log(typeof valueA, typeof valueB)
console.log(typeof result)
console.log(typeof valueC)
