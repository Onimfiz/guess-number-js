//Validacion para votar

let edad = prompt("¿Cuantos años tienes?");
edad = Number(edad);

if (edad >= 18) {
    alert("puedes votar 🗳️");
} else {
    alert("Aún no puedes votar 🧒");
}

// Temperatura
let temperatura =Number(prompt("¿Que temperatira hace hoy?"));

if (temperatura < 15) {
    alert("Hace frío, ponte abrigo 🥶");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

//Contraseña Segura
let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}

//Clasificacion de edad
if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

//Combinacion de condiciones
if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}
