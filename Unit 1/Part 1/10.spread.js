let nums = [12, 32, 6, 8, 23];
console.log(Math.max(nums)); // Imprime NaN (array no es válido), deben ser valores independientes
console.log(Math.max(...nums)); // Imprime 32 -> equivale a Math.max(12, 32, 6 ,8 ,23)

let a = [1, 2, 3, 4];
let b = a; // 'b' referencia el mismo array que 'a' (las modificaciones afectan a ambas variables).
let c = [...a]; // Nuevo array (copia de a) -> contiene [1, 2, 3, 4].
a[0] = 99;
console.log(b); // [99, 2, 3, 4]
console.log(c); // [1, 2, 3, 4]

let a2 = [1, 2, 3, 4];
let b2 = [5, 6, 7, 8];
let c2 = [...a2,...b2, 9, 10]; //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(c2);