// String properties and methods
// wrapper string object, - don't memorize methods

// let text = 'Brian Kipkemboi Koech'
// console.log(text.length)
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// console.log(text.charAt(2))
// console.log(text.charAt(text.length - 1))
// console.log(text.indexOf('K')) // Returns -1 if the exact character  does not exist
// console.log(text.trim())
// console.log(text.trim().toLowerCase().startsWith('brian'))
// console.log(text.includes('rian'))
// console.log(text.slice(0, 3)) // Starts at index 0 then counts the next 3 (therefore index 2)
// console.log(text.slice(-3))

// const person = {
//   fistName: 'Brian',
//   greeting() {
//     console.log("Hey, I'm Brian")
//   },
// }

// console.log(person)
// console.log(person.fistName)
// person.greeting()

// Template literals -- ES6+
// Defined using backtick characters ``
// Interpolation ${} - insert expression value

// const firstName = 'Brian'
// const age = 25
// const value = `Hey it's ${firstName} and he is ${age} years old and here is some simple math ${Math.log(
//   20
// )}.`
// console.log(value)

// // Array properties and methods
// let firstNames = ['john', 'bobo', 'barry', 'olga', 'ben']
// console.log(firstNames.length)
// console.log(firstNames[4])
// console.log(firstNames[firstNames.length - 1])
// // concat
// const lastNames = ['pepper', 'onion', 'banana']
// const allNames = firstNames.concat(lastNames)
// console.log(allNames)
// // reverse
// console.log(allNames.reverse())
// // unshift - Add to array beginning of array
// allNames.unshift('Denise')
// console.log(allNames)
// // shift - remove from beginning of array
// allNames.shift()
// console.log(allNames)
// // push - add to end of array
// allNames.push('Daniel')
// console.log(allNames)
// // pop - remove from end of array
// allNames.pop()
// console.log(allNames)
// // slice - mutates original array
// const specificNames = allNames.splice(0, 2)
// console.log(specificNames)

// Arrays and for loop
// const names = ['anna', 'bella', 'cate']
// const lastName = 'Koech'
// let newArray = []

// // for loop
// for (let index = 0; index < names.length; index++) {
//   newArray.push(`${names[index].toUpperCase()} ${lastName}`)
// }

// console.log(newArray)

// Functions, return, if, arrays, for loop

// const gas = [20, 40, 100]
// const food = [10, 40, 50]

// function calculateTotal(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }
//   if (total > 100) {
//     console.log('Whoa! you are spending way too much!')
//     return total
//   }
//   console.log('You are good total is less than 100')
//   return total
// }

// const gasTotal = calculateTotal(gas)
// const foodTotal = calculateTotal(food)
// const randomTotal = calculateTotal([200, 45555, 5000])

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// })

// Reference vs Value
// Primitive data types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeof
// const number = 1
// let number2 = number
// number2 = 7

// console.log(`the first number is  ${number}`)
// console.log(`the second number is ${number2}`)

// let person = {name: 'bob'}
// let person2 = {...person}
// person2.name = 'susy';
// console.log(`the name of the first person is ${person.name}`)
// console.log(`the name of the second person is ${person2.name}`)

//Null, NaN, Undefined
console.log(20 + null)
console.log(20 + undefined)

// Truthy and Falsy 
const bool1 = true
const bool2 = 2 > 1

if (bool1) {
  console.log('Hey, it works')
}

if (bool2){
  console.log('Hey, it also works')
}