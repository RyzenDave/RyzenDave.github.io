// IIFE Cart Module
const cartModule = (() => {
  let items = [];
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  function updateCartDisplay() {
    cartCount.textContent = items.length;
    cartTotal.textContent = items
      .reduce((sum, item) => sum + item.price, 0)
      .toFixed(2);
  }

  return {
    addItem: (price) => {
      items.push({ price: Number(price) });
      updateCartDisplay();
    },
    clearCart: () => {
      items = [];
      updateCartDisplay();
    },
    getCartItems: () => [...items],
  };
})();

// IIFE Product Module
const productModule = (() => {
  const products = [
    { name: "Wireless Headphones", price: 99.99 },
    { name: "Smartwatch", price: 199.99 },
    { name: "Bluetooth Speaker", price: 59.95 },
    { name: "E-Reader", price: 129.0 },
  ];

  const container = document.getElementById("products-container");
  const showMoreBtn = document.getElementById("show-more-btn");
  let shownProducts = 0;

  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn btn-primary add-to-cart">Add to Cart</button>
        `;

    card.querySelector(".add-to-cart").addEventListener("click", () => {
      cartModule.addItem(product.price);
    });

    return card;
  }

  function loadMoreProducts() {
    const nextProducts = products.slice(shownProducts, shownProducts + 2);
    nextProducts.forEach((product) => {
      container.appendChild(createProductCard(product));
    });
    shownProducts += nextProducts.length;

    if (shownProducts >= products.length) {
      showMoreBtn.disabled = true;
      showMoreBtn.textContent = "All Products Loaded";
    }
  }

  showMoreBtn.addEventListener("click", loadMoreProducts);

  // Initial load
  loadMoreProducts();

  return {
    getAvailableProducts: () => [...products],
  };
})();
