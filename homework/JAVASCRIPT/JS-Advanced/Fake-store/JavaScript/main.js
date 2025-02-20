fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    productsData = data; // Save fetched products for later use
    renderProducts(productsData);
  })
  .catch(function (error) {
    console.error("Error fetching products:", error);
  });

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const categoryMenu = document.getElementById("categoryMenu");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const purchaseBtn = document.getElementById("purchaseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");
const searchInput = document.getElementById("searchInput");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const applyFiltersBtn = document.getElementById("applyFilters");

// Render Functions
function renderProduct(product) {
  const productElement = document.createElement("div");
  productElement.className = "col-md-6 col-lg-4 col-xl-3";
  productElement.innerHTML = `
        <div class="card h-100">
            <img src="${product.image}" alt="${
    product.title
  }" class="card-img-top product-image p-3">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text text-muted">${product.category}</p>
                <p class="card-text fw-bold text-primary">$${product.price.toFixed(
                  2
                )}</p>
                <button class="btn btn-primary mt-auto add-to-cart-btn" data-id="${
                  product.id
                }">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
  return productElement;
}

function renderProducts() {
  productsGrid.innerHTML = "";
  const products = store.getCurrentPageProducts();

  if (products.length === 0) {
    productsGrid.innerHTML = `
            <div class="col-12 text-center">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search query</p>
            </div>
        `;
    return;
  }

  products.forEach((product) => {
    productsGrid.appendChild(renderProduct(product));
  });
  updatePagination();
}

function renderCategories(categories) {
  const allBtn = document.createElement("button");
  allBtn.className = "list-group-item list-group-item-action category-active";
  allBtn.textContent = "All";
  allBtn.dataset.category = "all";
  categoryMenu.appendChild(allBtn);

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "list-group-item list-group-item-action";
    btn.textContent = category;
    btn.dataset.category = category;
    categoryMenu.appendChild(btn);
  });
}

function renderCart() {
  cartItems.innerHTML = store.cart
    .map(
      (item) => `
        <div class="cart-item">
            <span>${item.title} (${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `
    )
    .join("");
  cartTotal.textContent = store.getCartTotal().toFixed(2);
}

function updatePagination() {
  const totalPages = store.getTotalPages();
  prevBtn.disabled = store.currentPage === 1;
  nextBtn.disabled = store.currentPage === totalPages;
  pageInfo.textContent = `Page ${store.currentPage} of ${totalPages}`;
}

// Event Handlers
function handleCategoryClick(e) {
  if (!e.target.matches(".list-group-item")) return;

  document.querySelectorAll(".list-group-item").forEach((btn) => {
    btn.classList.remove("category-active");
  });
  e.target.classList.add("category-active");

  store.setCategory(e.target.dataset.category);
  renderProducts();
}

function handleAddToCart(e) {
  if (!e.target.matches(".add-to-cart-btn")) return;

  const productId = parseInt(e.target.dataset.id);
  const product = store.products.find((p) => p.id === productId);
  store.addToCart(product);
  renderCart();
}

function handlePurchase() {
  if (store.cart.length === 0) return;

  alert("Thank you for your purchase!");
  store.clearCart();
  renderCart();
}

function handlePagination(e) {
  if (e.target === prevBtn && store.currentPage > 1) {
    store.setPage(store.currentPage - 1);
  } else if (
    e.target === nextBtn &&
    store.currentPage < store.getTotalPages()
  ) {
    store.setPage(store.currentPage + 1);
  }
  renderProducts();
}

function handleSearch(e) {
  store.setSearchQuery(e.target.value);
  renderProducts();
}

function handlePriceFilter() {
  const minPrice = minPriceInput.value;
  const maxPrice = maxPriceInput.value;
  store.setPriceRange(minPrice, maxPrice);
  renderProducts();
}

// Initialize
async function initialize() {
  try {
    const [products, categories] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);

    store.setProducts(products);
    renderCategories(categories);
    renderProducts();

    // Event Listeners
    categoryMenu.addEventListener("click", handleCategoryClick);
    productsGrid.addEventListener("click", handleAddToCart);
    purchaseBtn.addEventListener("click", handlePurchase);
    prevBtn.addEventListener("click", handlePagination);
    nextBtn.addEventListener("click", handlePagination);
    searchInput.addEventListener("input", handleSearch);
    applyFiltersBtn.addEventListener("click", handlePriceFilter);
  } catch (error) {
    console.error("Failed to initialize the store:", error);
  }
}

initialize();
