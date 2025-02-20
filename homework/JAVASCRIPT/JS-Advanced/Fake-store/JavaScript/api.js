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
