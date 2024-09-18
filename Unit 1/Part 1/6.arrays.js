let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log(a.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined (posición no asignada aún)

let a2 = new Array(12); // Crea un array de tamaño 12
console.log(a2.length); // Imprime 12
a2[20] = "Hello";
console.log(a2.length); // Ahora imprime 21 (0-20). Las posiciones 0-19 tendrán el valor undefine
console.log(a2); 

let a3 = [[10,20,30], [12, 9], [1,2,3]];
console.log(a3);

let nums = [12,4, 7, 35, 17, 20];

for(let i in nums) {
    console.log(`${i} -> ${nums[i]}`);
}

for(let num of nums) {
    console.log(num);
}