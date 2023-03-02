const $ = (selector) => document.querySelector(selector)

//Ejercicio 1//

/*const h1 = document.querySelector (".bienvenida")
const userName = prompt (`Ingrese su usuario:`)
h1.innerText += ` ${userName}`

//styles

h1.style.textAlign = "center"
h1.style.fontSize = "18px"
h1.style.fontFamily = "sans-serif"*/

//Ejercicio 2//

/*const body = document.querySelector("body")
const ingresarColor = prompt (`Ingrese color en sistema hexa:`)
body.style.backgroundColor = `${ingresarColor}`
console.log (body.style.backgroundColor)*/

//Ejercicio 3//

const body = document.querySelector("body")
const red = prompt (`Ingrese color en rgb:`)
const green = prompt (`Ingrese color en rgb:`)
const blue = prompt (`Ingrese color en rgb:`)
body.style.background = `rgb (${red} ${green} ${blue})`






