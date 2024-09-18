function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Tom"); // "Hello Tom"
sayHello(); // "Hello undefined"
sayHello(34, "Hello", true, 0); // "Hello 34"

function totalPrice(priceUnit, units) {
  return priceUnit * units;
}

let total = totalPrice(5.95, 6);
console.log(total); // 35.7

console.log(typeof totalPrice); // function
let totalPrice2 = totalPrice;
console.log(totalPrice2(34, 7));

setTimeout(function () {
  console.log("Hello after 3 seconds");
}, 3000);

setTimeout(() => console.log("Hello after 4 seconds"), 4000);

function sayHello(name) {
    name = name ?? "Anonymous";
    console.log("Hello! I'm " + name);
}

// sayHello(0);

function sayHello2(name = "Anonymous") {
    console.log("Hello! I'm " + name);
}

sayHello2(); // Hello! I'm Anonymous 
sayHello2("Peter"); // Hello! I'm Peter
