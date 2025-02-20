// script.js

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("productsContainer");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  let productsData = []; // Will hold the fetched products

  // Function to render products to the DOM
  function renderProducts(products) {
    productsContainer.innerHTML = ""; // Clear previous content
    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";
      col.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}" style="object-fit: contain; height: 200px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
            <p class="card-text"><small class="text-muted">${product.category}</small></p>
            <button class="btn btn-primary mt-auto">Add to Cart</button>
          </div>
        </div>
      `;
      productsContainer.appendChild(col);
    });
  }
  // Fetch products from the Fake Store API
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      productsData = data; // Save data for later filtering
      renderProducts(productsData);
      console.log(productsData);
    })
    .catch((error) => console.error("Error fetching products:", error));

  // Simple search functionality
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts();
    renderProducts(filteredProducts);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("productsContainer");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  let productsData = []; // Will hold the fetched products

  // Function to render products to the DOM
  function renderProducts(products) {
    productsContainer.innerHTML = ""; // Clear previous content
    if (products.length === 0) {
      productsContainer.innerHTML = `<p class="text-center">No products found.</p>`;
      return;
    }
    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";
      col.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}" style="object-fit: contain; height: 200px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
            <p class="card-text"><small class="text-muted">${product.category}</small></p>
            <button class="btn btn-primary mt-auto">Add to Cart</button>
          </div>
        </div>
      `;
      productsContainer.appendChild(col);
    });
  }

  // Function to filter products by category and price
  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseFloat(priceFilter.value);

    let filteredProducts = productsData;

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price
    if (!isNaN(selectedPrice)) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= selectedPrice
      );
    }

    renderProducts(filteredProducts);
  }

  // Fetch products from the Fake Store API
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      productsData = data; // Save data for later filtering
      renderProducts(productsData);

      // Populate category filter dropdown
      const categories = [...new Set(data.map((product) => product.category))];
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));

  // Simple search functionality
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  });

  // Add event listeners for filtering
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
});
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("productsContainer");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  let productsData = []; // Will hold the fetched products

  // Function to render products to the DOM
  function renderProducts(products) {
    productsContainer.innerHTML = ""; // Clear previous content
    if (products.length === 0) {
      productsContainer.innerHTML = `<p class="text-center">No products found.</p>`;
      return;
    }
    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";
      col.innerHTML = `
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}" style="object-fit: contain; height: 200px;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">$${product.price}</p>
              <p class="card-text"><small class="text-muted">${product.category}</small></p>
              <button class="btn btn-primary mt-auto">Add to Cart</button>
            </div>
          </div>
        `;
      productsContainer.appendChild(col);
    });
  }

  // Function to filter products by category and price
  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseFloat(priceFilter.value);

    let filteredProducts = productsData;

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price
    if (!isNaN(selectedPrice)) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= selectedPrice
      );
    }

    renderProducts(filteredProducts);
  }

  // Fetch products from the Fake Store API
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      productsData = data; // Save data for later filtering
      renderProducts(productsData);

      // Populate category filter dropdown
      const categories = [...new Set(data.map((product) => product.category))];
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));

  // Simple search functionality
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  });

  // Add event listeners for filtering
  categoryFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
});
