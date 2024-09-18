let a = [3, 21, 15, 61, 9];
console.log(a.join()); // Imprime "3,21,15,61,9""
console.log(a.join(" -#- ")); // Imprime "3 -#- 21 -#- 15 -#- 61 -#- 9"

let b = [10, 20, 30];
let c = a.concat(b, 40, 50);
console.log(c.toString()); // 3,21,15,61,9,10,20,30,40,50

let s = "tenedor";
console.log(Array.from(s)); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']

let a2 = ["a", "b", "c", "d", "e", "f"];
let b2 = a2.slice(1, 3); // (posición de inicio → incluida, posición final → excluida)
console.log(b2); // Imprime ["b", "c"]

let names = ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"];
console.log(names.toSorted()); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]
console.log(names); // ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"] -> Original no modificado

names.sort(); // Ordena el array original
console.log(names); // ["Alison", "Anne", "Jen", "Peter", "Rob", "Thomas"]

let nums = [13, 43, 5, 23, 1107, 9, 35, 273];
nums.sort();
console.log(nums); // [1107, 13, 23, 273, 35, 43, 5, 9]
nums.sort((n1, n2) => n1 - n2);
console.log(nums); // [5, 9, 13, 23, 35, 43, 273, 1107]

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return this.name + " (" + this.age + ")";
  }
}

let people = [
  new Person("Thomas", 24),
  new Person("Mary", 15),
  new Person("John", 51),
  new Person("Phillip", 9),
];

people.sort((p1, p2) => p1.age - p2.age); // Ordenamos por edad número
console.log(people.toString()); // "Phillip (9),Mary (15),Thomas (24),John (51)"

people.sort((p1, p2) => p1.name.localeCompare(p2.name)); // Ordenamos por nombre (string)
console.log(people.toString()); // "John (51),Mary (15),Phillip (9),Thomas (24)"

let nums2 = [1, 2, 3, 4];
let nums3 = nums2.with(2, 99);
console.log(nums2); // [1, 2, 3, 4] -> Original
console.log(nums3); // [1, 2, 99, 4] -> Nuevo array con el cambio

nums2.forEach(n => console.log(n));