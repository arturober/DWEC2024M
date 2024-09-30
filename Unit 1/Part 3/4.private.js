class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() { // Getter
        return this.#name.toUpperCase();
    }

    set name(name) { // Setter
        if(!name) throw Error("Name must not be empty");
        this.#name = name;
    }

    #privateMethod() {
        console.log("You can't call me from outside");
    }
}

const p = new Person("Mary");
console.log(p);
// console.log(p.#name); // ERROR
p.name = "Elena";
// p.name = ""; // Error: Name must not be empty
console.log(p.name); // ELENA
