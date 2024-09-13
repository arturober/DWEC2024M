"use strict";

let v1 = "Hola Mundo!";
console.log(typeof v1); // Imprime -> string

v1 = 123;
console.log(typeof v1); // Imprime -> number

v1 = true;
console.log(typeof v1); // Imprime -> boolean

let v2;
console.log(typeof v2); // Imprime -> undefined

// v3 = "PEpito"; // ReferenceError: v3 is not defined
// console.log(v3);

const c = 23;
c = 24; // TypeError: Assignment to constant variable