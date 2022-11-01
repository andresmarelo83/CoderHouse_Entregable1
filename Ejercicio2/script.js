let numRandom = parseInt(Math.random()*11)
let numUsuario = parseInt(prompt("del 1 al 10 adivina en que numero estoy pensando?"))

if (numRandom == numUsuario){
    alert("FELICIDADES EL " + numUsuario + " era el Numero que tenia en mente =) ")
} else {
    alert("intentalo de nuevo")
}