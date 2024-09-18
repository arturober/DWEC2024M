let array = [150, 400, 780, 1500, 200];
let [v1, v2, v3] = array; // Asigna los tres primeros elementos del array
console.log(v3); // Imprime 780

let [n1, n2, ...resto] = array; // resto será un array
console.log(resto); // Imprime [780, 1500 ,200]

let sueldos = [["Pedro", "Maria"], [24000, 35400]];
let [[nombre1, nombre2], [sueldo1, sueldo2]] = sueldos;
console.log(nombre1 + " gana " + sueldo1 + "€"); // Imprime "Pedro gana 24000€"

function imprimirUsuario([id, nombre, email], otraInfo = "Nada") {
    console.log("ID: " + id);
    console.log("Nombre: " + nombre);
    console.log("Email: " + email );
    console.log("Otra info: " + otraInfo );
}

let infoUsu = [3, "Pedro", "peter@gmail.com"];
imprimirUsuario(infoUsu, "No es muy listo");

function areaCuadrado([ancho, alto]) {
    return ancho * alto;
}

console.log(areaCuadrado([4, 7]));