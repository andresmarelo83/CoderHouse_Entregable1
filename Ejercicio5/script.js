let numUsuario = parseInt(prompt("Escribe un numero"))

if (numUsuario%3 == 0) {
    alert("BING")
}  else if (numUsuario%5 == 0) {
    alert("BONG")
}
if (numUsuario%3 == 0 && numUsuario%5 == 0) {
    alert("BINGBONG")
}else {
    alert(numUsuario)
}