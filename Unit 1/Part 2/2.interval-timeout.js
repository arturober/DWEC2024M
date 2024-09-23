setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("Hello world!");

let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}, 1000);

function multiply(num1, num2) {
    console.log(num1 * num2);
}

setTimeout(multiply, 3000, 5, 7); // Después de 3 segundos imprimirá 35 (5*7)