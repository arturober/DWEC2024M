class Product {
    stock = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showInfo() {
        console.log(`${this.name} - ${this.price}`);
    }
}

console.log(typeof Product); // function
const p = new Product("Chair", 45);
console.log(p);
console.log(p.name);
console.log(p.price);
p.showInfo();