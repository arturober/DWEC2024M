let div = document.getElementById("div1");
console.log(div.firstChild); // Texto
console.log(div.firstElementChild);

let firstInput = div.firstElementChild;
firstInput.value = "Input 1";
firstInput.nextElementSibling.value = "Input 2";
div.lastElementChild.value = "Input 3";

Array.from(div.children).forEach((c) => console.log(c));
