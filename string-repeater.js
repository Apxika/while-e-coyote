const prompt = require ('prompt-sync')({sigint: true})

let str = prompt(`Enter a string: `)
let derp = str

while (str.length < 10) {
    console.log(str)
    str = derp+str
    
}
console.log(str)