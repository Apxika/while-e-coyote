// Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

const prompt = require ('prompt-sync')({sigint: true})

let num = Number(prompt(`Enter a juicy number: `)) 
console.log(num)
let sum = 0

while (sum < 100) {
    sum = sum + num
    console.log(sum)
    num * 2
}

console.log(`You reached ${sum}`)