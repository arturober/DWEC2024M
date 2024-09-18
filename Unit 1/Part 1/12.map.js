let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};
let person3 = {name: "Louise", age: 17};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

console.log(hobbies.has(person1)); // true (referencia al objeto original almacenado)
console.log(hobbies.has({name: "Peter", age: 21})); // false (mismas propiedades pero objeto diferente!)

 // Continuamos con el código anterior
 console.log(hobbies.size); // Imprime 3
 hobbies.delete(person2); // Elimina person2 del Map
 console.log(hobbies.size); // Imprime 2
 console.log(hobbies.get(person3)[2]); // Imprime "Sleeping"
 
 /** Recorremos Map y lo imprimimos:
  * Peter: Tennis, Computers, Movies
  * Louise: Boxing, Eating, Sleeping */
 for(let entry of hobbies) {
     console.log(entry[0].name + ": " + entry[1].join(", "));
 }
 
 for(let [person, hobArray] of hobbies) { // Mejor
     console.log(person.name + ": " + hobArray.join(", "));
 }
 
 hobbies.forEach((hobArray, person) => { // Mejor
     console.log(person.name + ": " + hobArray.join(", "));
 });