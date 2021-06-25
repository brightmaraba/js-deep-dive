// Arrays, Functions and Objects
// Arrays - [] - 0 index based
const friends = [
  'John',
  'Peter',
  'Daniel',
  'Jack',
  'James',
  45,
  undefined,
  null,
]

let bestFriend = friends[2]
friends[5] = 'Anna'
console.log(friends)
console.log(bestFriend)

// Functions - Declare & invoke

function greet(name) {
  console.log('Hello there, ' + name)
}

greet('brian')

// Calculate the area of a triangle
function calculateArea(dimensions) {
  const area = 0.5 * dimensions[0] * dimensions[1]
  return area
}

const base = 20
const height = 10

const dimensions = [base, height]
result = calculateArea(dimensions)
console.log(result)

// Anonymous function - Area of a Circle
const circleArea = function (radius) {
  return (22 / 7) * (radius * radius)
}

let cirleA = circleArea(7)
console.log(cirleA)

// Arrow funtions
const multiply = (num1, num2) => num1 * num2
product = multiply(20, 30)
console.log(product)

// Objects

const person = {
  firstName: 'Brian',
  surname: 'Koech',
  age: 35,
  married: false,
  education: true,
  siblings: ['Chirrie', 'Cheruto', 'Cheptoo'],
  greetings() {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.surname)
  },
}

person.greetings()
