// WARNING. This is the old syntax. Forget it!!
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.showInfo = function() {
    console.log(`${this.name} - ${this.price}`);
}

const p = new Product("Chair", 45);
console.log(p);
console.log(p.name);
console.log(p.price);
p.showInfo();