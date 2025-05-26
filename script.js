async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=100&skip=10"
  );
  const data = await response.json();

  console.log(data);

  return data.products;
}

const productsContainer = document.getElementById("productsContainer");

function renderProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = product.images[0];

    const title = document.createElement("h2");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    productsContainer.appendChild(card);
  });
}

const searchBar = document.getElementById("searchBar");

async function searchProducts() {
  console.log(searchBar.value);
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchBar.value}`
  );
  const data = await response.json();
  renderProducts(data.products);
}

getProducts().then(renderProducts);
