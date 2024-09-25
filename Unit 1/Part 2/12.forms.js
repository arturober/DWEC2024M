const form = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");

form.avatar.addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file); // Serializar en base64
    reader.addEventListener('load', e => { // Serialización terminada
        imgPreview.src = reader.result; // Datos en Base64
    });
});

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Impedimos que se recargue la página

    console.log(form.nombre.value);
    // Forma errónea
    console.log(form.hobbies.value); // Cadena vacía siempre
    // Forma correcta
    console.log(
        Array.from(form.hobbies)
            .filter((input) => input.checked)
            .map((input) => input.value)
    ); // Array con los valores seleccionados

    // Resto del código
});