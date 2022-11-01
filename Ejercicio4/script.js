let peso = parseInt(prompt("Escribe tu peso en kilogramos"))
let altura = parseInt(prompt("Escribe tu altura en metros"))

let imc = peso/(altura^2)


if (imc < 18.5) {
    alert("Tu inice de masa corporal es " + imc +" Bajo de Peso")
    } else if (imc >= 18.5 &&  imc <= 24.9) {
            alert("Tu inice de masa corporal es " + imc +" Normal")
        }  else if (imc >= 25 &&  imc <= 29.9) {
            alert("Tu inice de masa corporal es " + imc +" Sobrepeso")
            }else if(imc >=30) {
                alert("Tu inice de masa corporal es " + imc +" Obeso")
            }
