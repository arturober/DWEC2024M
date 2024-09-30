class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return `${this.nombre} (${this.edad})`
    }

    valueOf() {
        return this.edad; // Los objetos se compararán por edad
    }
}

let ana = new Persona("Ana", 34);
console.log("Persona: " + ana); // # Persona: Ana (34)
let juan = new Persona("Juan", 25);

console.log(ana > juan); // true

const people = [ana, juan, new Persona("Pepe", 15), new Persona("Marta", 29)];
people.sort((p1, p2) => p1.edad - p2.edad); // No sirve el valueOf para ordenar. Debemos poner una función
console.log(people.toString());
