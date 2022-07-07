// Iteration 1: Names and Input
console.log("I'm ready!")
let hacker1
hacker1= "manuel"
console.log("The driver's name is ",hacker1)
let hacker2= "Pepeluis";
console.log("The navigator's name is ",hacker2)
const hacker1Long=hacker1.length
const hacker2Long=hacker2.length
let result=`Wow, you both have equally long names, ${hacker1.length} characters!`
console.log(hacker1Long)
console.log(hacker2Long)
// Iteration 2: Conditionals
if (hacker1Long>hacker2Long) {
    result=`The driver has the longest name, it has ${hacker1Long} characters`
  } else if (hacker1Long<hacker2Long) {
    result=`It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  } console.log(result); 


// Iteration 3: Loops
let nombreK='' 
for(let i=0;i<hacker1.length;i++){
    nombreK= nombreK+hacker1[i].toUpperCase()+" ";
   
}
console.log(nombreK)

let nombreReves =''
for(let i= hacker2.length -1; i>=0;i--){
    const elemento =hacker2.charAt(i)
    nombreReves+=elemento
}
console.log(nombreReves)
//bonus2
const phraseToCheck="A man, es plan, a canal, Panama!"
.toLowerCase()
.replace(/[^a-zA-Z0-9]/g, '')
console.log(phraseToCheck)
const reversePhrase=[...phraseToCheck].reverse().join('')
if (phraseToCheck===reversePhrase) {
    console.log('La frase es Palíndroma');    
}
else console.log('La frase No es Palíndroma');