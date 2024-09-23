const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    const texto = form.texto.value;
    document.getElementById("p1").innerHTML = texto;
});