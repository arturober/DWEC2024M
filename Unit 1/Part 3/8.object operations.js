// OBJECT DESTRUCTURING
let usuario = {
    id: 3,
    nombre: "Pedro",
    email: "peter@gmail.com"
}

let {id, nombre, email} = usuario;
console.log(nombre); // Imprime "Pedro"

// Se pueden asignar variables con nombres diferentes a los atributos
let {nombre: nombreUsuario, email: emailUsuario} = usuario;
console.log(nombreUsuario); // Imprime "Pedro"
console.log(emailUsuario); // Imprime "peter@gmail.com"

// Esta función recibirá un objeto como primer parámetro y lo desestructurará en variables
function imprimirUsuario({id, nombre, email}, otraInfo = "Nada") {
    console.log(`Id: ${id}, nombre: ${nombre}, email: ${email}`);
    console.log(`Otra información: ${otraInfo}`);
}

imprimirUsuario(usuario, "Es muy listo");

// OBJECT SPREAD

function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        gender: "female"
    };

    let config = {...defaults, ...options}; // Combinamos el objeto defaults con options
    console.log(config);
}

let options = {
    name: "Super Master",
    gender: "male"
};
configGame(options); // {name: "Super Master", level: 1, difficulty: "normal", gender: "male"}