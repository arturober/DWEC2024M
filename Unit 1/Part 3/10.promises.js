function sumPromise(n1, n2, time = 2000) {
    if(n1 < 0 || n2 < 0) {
        return Promise.reject("Can't add negative numbers");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), time);
    });
}

// Don't nest Promises!!

// sumPromise(4, 6).then((r1) => {
//     sumPromise(r1, 10).then(r2 => {
//         console.log(r2);
//     });
// });

// This is better

sumPromise(4, 6).then((r1) => { // 10
    return sumPromise(r1, 10);
}).then((r2) => { // 20
    return r2 + 100;
}).then((r3) => { // 120
    console.log(r3); 
});

console.log("Hello world!");

// Promise.all([
//     sumPromise(4, 7, 3000),
//     sumPromise(9, 12, 1500),
//     sumPromise(8, 36, 5000),
// ])
// .then(res => console.log(res))
// .catch(error => console.log(error)); // [11, 21, 44]

// Promise.race([
//     sumPromise(4, 7, 3000),
//     sumPromise(9, 12, 1500),
//     sumPromise(8, 36, 5000),
// ]).then(res => console.log(res)); 

Promise.allSettled([
    sumPromise(4, 7, 3000),
    sumPromise(9, 12, 1500),
    sumPromise(-8, 36, 5000),
])
.then(res => console.log(res))
.catch(error => console.log(error)); // [11, 21, 44]
