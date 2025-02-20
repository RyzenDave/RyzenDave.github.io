class Store {
  constructor() {
    this.products = [];
    this.cart = [];
    this.currentCategory = "all";
    this.currentPage = 1;
    this.productsPerPage = 8;
    this.searchQuery = "";
    this.priceRange = {
      min: null,
      max: null,
    };
  }

  addToCart(product) {
    const existingItem = this.cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  clearCart() {
    this.cart = [];
  }

  getCartTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  setProducts(products) {
    this.products = products;
  }

  setSearchQuery(query) {
    this.searchQuery = query.toLowerCase();
    this.currentPage = 1;
  }

  setPriceRange(min, max) {
    this.priceRange.min = min ? parseFloat(min) : null;
    this.priceRange.max = max ? parseFloat(max) : null;
    this.currentPage = 1;
  }

  getFilteredProducts() {
    let filtered = this.products;

    // Category filter
    if (this.currentCategory !== "all") {
      filtered = filtered.filter((p) => p.category === this.currentCategory);
    }

    // Search filter
    if (this.searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(this.searchQuery) ||
          p.description.toLowerCase().includes(this.searchQuery)
      );
    }

    // Price range filter
    if (this.priceRange.min !== null) {
      filtered = filtered.filter((p) => p.price >= this.priceRange.min);
    }
    if (this.priceRange.max !== null) {
      filtered = filtered.filter((p) => p.price <= this.priceRange.max);
    }

    return filtered;
  }

  getCurrentPageProducts() {
    const filtered = this.getFilteredProducts();
    const start = (this.currentPage - 1) * this.productsPerPage;
    return filtered.slice(start, start + this.productsPerPage);
  }

  getTotalPages() {
    return Math.ceil(this.getFilteredProducts().length / this.productsPerPage);
  }

  setCategory(category) {
    this.currentCategory = category;
    this.currentPage = 1;
  }

  setPage(page) {
    this.currentPage = page;
  }
}

export const store = new Store();
