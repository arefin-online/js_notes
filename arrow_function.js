// Example 1 - split()
function revString(str) {
return str.split('')
}
console.log(revString("Morshedul Arefin"))
OUTPUT:
[
'M', 'o', 'r', 's',
'h', 'e', 'd', 'u',
'l', ' ', 'A', 'r',
'e', 'f', 'i', 'n'
]

Example 2 - Reverse a String - split(), reserver() and join()
function revString(str) {
return str.split('').reverse().join('')
}
console.log(revString("Morshedul Arefin"))
OUTPUT:
niferA ludehsroM

Example 3 - Assigning the complete function into a variable
const revString = function(str) {
return str.split('').reverse().join('')
}
console.log(revString("Morshedul Arefin"))
OUTPUT:
niferA ludehsroM
