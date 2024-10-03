const SERVER = "https://api.fullstackpro.es/products-example";

const productsTable = document.getElementById("products");

async function getProducts() {
  const resp = await fetch(`${SERVER}/products`);
  const json = await resp.json();
  json.products.forEach((p) => showProduct(p));
}

function showProduct(product) {
  const tr = document.createElement("tr");
  const tdImage = document.createElement("td");
  const tdDesc = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdAvail = document.createElement("td");

  const img = document.createElement("img");
  img.src = product.imageUrl;

  tdImage.append(img);
  tdDesc.textContent = product.description;
  tdPrice.textContent = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  tdAvail.textContent = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  tr.append(tdImage, tdDesc, tdPrice, tdAvail);
  productsTable.querySelector("tbody").append(tr);
}

getProducts();
