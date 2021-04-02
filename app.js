// Loops
// Repeatedly execute a block of code while CONDITION is TRUE
// while loop

let amount = 10

while (amount > 0) {
  console.log('I have ' + amount + " dollars and I'm going to the mall")
  amount--
}

// do while

let money = 0

do {
  console.log('You have ' + money + ' dollars')
  money++
} while (money < 10)

// for loops

let i
for (i = 0; i < 10; i++) {
  console.log('and the number is ' + i)
}

for (let number = 11; number >= 0; number--) {
  console.log('and the number is : ' + number)
}
