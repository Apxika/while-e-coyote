const prompt = require ('prompt-sync')({sigint: true})

let n = Number(prompt(`Enter a number: `))
let f = 0
let x = 1
let y = 1

while (y <= n) {
    console.log(f)
    let sum = f + x
    f = x
    x = sum
    y = y + 1
    
}
