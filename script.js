const nombre = prompt("¿Cómo te llamas?");
const edad   = Number(prompt("¿Cuántos años tienes?"));
const ciudad = prompt("¿En qué ciudad vives?");

alert(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);

console.log("Nombre ingresado:",  nombre);
console.log("Edad ingresada:",    edad);
console.log("Ciudad ingresada:",  ciudad);

if (Number.isNaN(edad)) {
  alert("⚠️ La edad no es un número válido.");
} else if (edad < 18) {
  alert("¡Bienvenido! Eres menor de edad 🧒");
} else {
  alert("¡Bienvenido adulto independiente! 🎉");
}
