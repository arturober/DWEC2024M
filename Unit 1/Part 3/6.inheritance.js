class Person {
    constructor(name) {
       this.name = name; 
    }

    showInfo() {
        console.log(`My name is ${this.name}`);
    }
}

class User extends Person {
    constructor(name, username, password) {
        super(name);
        this.username = username;
        this.password = password;
    }

    showInfo() {
        super.showInfo();
        console.log(`User: ${this.username}. Password: ${this.password}`);
    }
}

const user = new User("Pepito", "pepe", "1234");
user.showInfo();