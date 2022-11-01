let numRandom =parseInt(Math.random()*10)
let numUsuario = parseInt(prompt("ingresa un numero entre 1 y el 10 y trata de adivinar el numero que estoy pensando"))
console.log(numRandom)
while(numRandom !== numUsuario){
    if (numRandom == numUsuario){
       break
    } else{
        numUsuario = parseInt(prompt("vuelve a intentarlo"))
    }
}
document.write("Adivinaste!! era el "+numRandom)
