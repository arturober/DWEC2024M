const promise = new Promise((resolve, reject) => {
    const n1 = 23;
    const n2 = 43;
    setTimeout(() => resolve(n1 + n2), 2000);
});

promise.then((result) => console.log(result));
console.log("Hello world!");