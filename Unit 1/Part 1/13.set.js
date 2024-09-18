let set = new Set();
set.add("John");
set.add("Mary");
set.add("Peter");
set.delete("Peter");
console.log(set.size); // Imprime 2

set.add("Mary"); // Mary ya existe
console.log(set.size); // Imprime 2

// Itera a través de los valores
set.forEach(value => {
    console.log(value);
})