function f(nombre) {
    if(nombre == undefined) {
        console.error("No has introducido un nombre!");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

f("Juan"); // Hola Juan
f(); // // ERROR: No has introducido un nombre!


let a; // undefined
let b = null;

console.log(a == b); // true (son equivalentes)
console.log(a === b); // false (diferente tipo de datos)
console.log(typeof a);
console.log(typeof b);

