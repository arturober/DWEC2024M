console.log(3.32924325.toFixed(2)); // Imprime 3.33
console.log(5435.45.toExponential()); // Imprime 5.43545e+3
console.log((3).toFixed(2)); // Imprime 3.00 

console.log(Number.MIN_VALUE); // 5e-324 (número más pequeño)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (Número más grande)

console.log(5 / 0); 

let n = new Number(14);
console.log(n + 24);

let x = new Number(500);
let y = new Number(500);
console.log(x == y); // false
console.log(x === y); // false

let a = 500;
console.log(x == a); // true
console.log(x === a); // false

console.log(typeof a); // number
console.log(typeof x); // object

// Sin embargo, ambos tienen las mismas propiedades y métodos
console.log(a.__proto__) // Number {...}
console.log(x.__proto__) // Number {...}