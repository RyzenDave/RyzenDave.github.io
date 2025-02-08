// Run initialization after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  init();
});

// Start the app by fetching the products
function init() {
  fetchProducts();
}

// Fetch 10 products from the API
function fetchProducts() {
  fetch("https://dummyjson.com/products?limit=10")
    .then((response) => response.json())
    .then((data) => {
      if (data && data.products) {
        renderProducts(data.products);
      } else {
        console.error("Unexpected data format:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

// Render all product cards into the container
function renderProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Create a product card with separate image and text containers
function createProductCard(product) {
  // Create a responsive column container
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-4 mb-4";

  // Create the main card container
  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100";

  // --- Image Container ---
  const imageContainer = document.createElement("div");
  imageContainer.className = "card-image-container";

  const img = document.createElement("img");
  img.className = "card-img-top";
  // Use thumbnail (or fallback to image) from the product data
  img.src = product.thumbnail || product.image || "";
  img.alt = product.title;
  imageContainer.appendChild(img);
  cardDiv.appendChild(imageContainer);

  // --- Text Container ---
  const textContainer = document.createElement("div");
  textContainer.className = "card-text-container";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = product.title;
  cardBody.appendChild(title);

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = product.description;
  cardBody.appendChild(description);

  textContainer.appendChild(cardBody);
  cardDiv.appendChild(textContainer);

  // Append the complete card to the column container
  colDiv.appendChild(cardDiv);

  return colDiv;
}
