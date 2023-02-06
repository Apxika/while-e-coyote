const prompt = require ('prompt-sync')({sigint: true})

let num = Number(prompt(`Enter a number: `));
let sum = 0

while (num > 0) {
    sum = sum + num;
    console.log(`Sum:${sum}`)
    num = Number(prompt(`Add more or end with 0: `))
}

console.log(`Final sum: ${sum}`)