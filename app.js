// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===
// if statement, else if, and !

// const value = true

// if (value) {
//   console.log('hello world')
// } else {
//   console.log('Hello people!')
// }

// const num1 = 6
// const num2 = 10
//const value = false

// if (num1 > num2) {
//   console.log('first number is bigger than second')
// } else if (num1 >= num2) {
//   console.log('first number is equal to second number')
// } else {
//   console.log('second number is bigger than first')
// }

// if (!value) {
//   console.log('value is true')
// }

// const value1 = num1 == num2
// const value2 = num1 === num2 // Checks value and type

// console.log(num1, num2, value1, value2)

// Logical operators || - OR, && - AND, ! - NOT
// const firstName = 'bob'
// const age = 24

// if (firstName === 'bob' || age === 24) {
//   console.log('hello there user')
// } else {
//   console.log('Wrong values')
// }

// if (firstName === 'bob' && age === 24) {
//   console.log('Hello there user')
// } else {
//   console.log('Wrong values')
// }

// if (firstName != 'bob') {
//   console.log('You are not bob!')
// }

// Dice using if and switch
const dice = 0

// if (dice === 1) {
//   console.log('You got 1')
// } else if (dice === 2) {
//   console.log('You got 2')
// } else if (dice === 3) {
//   console.log('You got 3')
// } else if (dice === 4) {
//   console.log('You got 4')
// } else if (dice === 5) {
//   console.log('You got 5')
// } else if (dice === 6) {
//   console.log('You got 6')
// } else {
//   console.log('You did not throw the dice')
// }

// Implementing the same using switch
switch (dice) {
  case 1:
    console.log('You got 1')
    break
  case 2:
    console.log('You got 2')
    break
  case 3:
    console.log('You got 3')
    break
  case 4:
    console.log('You got 4')
    break
  case 5:
    console.log('You got 5')
    break
  case 6:
    console.log('You got 6')
    break
  default:
    console.log('You did not roll the dice')
}
