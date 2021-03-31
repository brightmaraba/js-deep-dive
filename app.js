// Arrays, Functions and Objects
// Arrays ->
// Created using square brackets [], 0 index based
// const friend1 = 'Ann'
// const friend2 = 'Bella'
// const friend3 = 'Caren'
// const friend4 = 'Daniella'

// const femaleFriends = [friend1, friend2, friend3, friend4]

// console.log(femaleFriends)

// const briansDetails = [
//   'Brian',
//   'Koech',
//   '25 A Greydon Street',
//   'Nollamara',
//   6061,
//   undefined,
//   null,
// ]

// console.log(briansDetails)

// Accessing objects in arrays
// console.log(femaleFriends[3]) // Index starts at 0
// arrayLength = femaleFriends.length
// console.log(arrayLength)
// bestFriend = femaleFriends[3] // Access array object using index
// console.log(bestFriend)
// address = briansDetails[2]
// console.log(address)
// femaleFriends[4] = 'Esther' // Assign more objects to array
// console.log(femaleFriends)

// Functions - Essential building blocks of JS Programmes
// Declare, then invoke - Allows us to reuse pieces of code without copy + paste
// Params - when to declare/define
// Params - placeholder or local variables accessible inside a funtion
// Arguments - Same thing, but reference to parsing during invocation
// use vars/values, multiple params, undefined

// Declare
function hello() {
  console.log('Hello there, Daniel')
}
// Invoke
hello()

// Set up parameters
function helloFriend(friend) {
  console.log('Hello there ' + friend)
}
// Invoke function and parse arguments
helloFriend('Brian')
// Multiple params
function helloFriends(friend1, friend2) {
  console.log('Hello ' + friend1 + ' and ' + friend2)
}
helloFriends('Brian', 'Ronald')

// Return statement
const wallHeight = 80

function convert(value) {
  // const newValue = value * 2.54
  return value * 2.54
}

const width = convert(100)
const height = convert(wallHeight)

dimension = [width, height]

console.log(dimension)

const area = dimension[0] * dimension[1]
console.log(area)
const perimeter = 2 * (dimension[0] + dimension[1])
console.log(perimeter)

// Variable expression
const add = function (num1, num2) {
  return num1 + num2
}

console.log(add(10, 30))
console.log(add(100, 200))

// Use directly in arrays
const values = [add(10, 20), add(21, 34), add(45, 66)]
console.log(values)

// Arrow function
const multiply = (num1, num2) => num1 * num2
console.log(multiply(10, 100))

// Objects - Key-Value pairs
// If value is a fuction, then the object is a method

const person = {
  firstName: 'Brian',
  secondName: 'Koech',
  address: '25 A Quahoq',
  age: 40,
  education: 'Postgraduate',
  married: true,
  siblings: ['Anna', 'Beatrice', 'Jackline'],
  greeting() {
    console.log('Hello my name is John')
  },
}

// Dot notation
console.log(person.firstName)
console.log(person.siblings[2])
person.greeting()
