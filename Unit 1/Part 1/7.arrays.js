let a = [1,2,3,4,5];

function modArray(array) {
    array[0] = 99;
}

modArray(a);
console.log(a); // [99, 2, 3, 4, 5]


