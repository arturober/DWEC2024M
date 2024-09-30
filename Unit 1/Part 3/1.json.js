let obj = new Object();
obj.name = "Peter";
obj["age"] = 14;
obj.getInfo = function () {
  // Creamos un nuevo método → getInfo()
  return "My name is " + this.name + ". I'm " + this.age;
};

console.log(obj.getInfo());
console.log(obj.name); // Imprime "Peter". Accedemos al nombre usando la notación del punto
console.log(obj["name"]); // Imprime "Peter". Ahora accedemos con la notación del array asociativo

for (let p in obj) {
  console.log(`${p} -> ${obj[p]}`);
}

// JSON
let obj2 = {
  name: "John",
  age: 41,
  getInfo() {
    // Método
    return "My name is " + this.name + ". I'm " + this.age;
  },
};

console.log(obj);
console.log(obj2);

console.log(obj2.getInfo());

let persona = {
  nombre: "Peter",
  edad: 41,
  trabajos: [
    // trabajos es un array de objetos JSON
    {
      descripcion: "Malabarista",
      duracion: "2003-2005",
    },
    {
      descripcion: "Conductor de autobús",
      duracion: "2005-2015",
    },
  ],
};

console.log(persona.trabajos[1].descripcion); // Imprime "Conductor de autobús”
