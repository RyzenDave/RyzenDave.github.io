// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://dummyjson.com/carts";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const carts = data.carts;

      // 1. All product titles in all carts
      const allProductTitles = carts.flatMap((cart) =>
        cart.products.map((product) => product.title)
      );

      // 2. The total quantity of all products purchased
      const totalQuantity = carts.reduce((acc, cart) => {
        const cartQuantity = cart.products.reduce(
          (sum, product) => sum + product.quantity,
          0
        );
        return acc + cartQuantity;
      }, 0);

      // 3. Check if there is any cart with a total value above $100,000

      const anyCartAbove100K = carts.some((cart) => cart.total > 100000);

      // 4. The total revenue from all carts
      const totalRevenue = carts.reduce(
        (acc, cart) => acc + cart.discountedTotal,
        0
      );

      // 5. The cart with the highest total value
      const highestTotalCart = carts.reduce((maxCart, cart) => {
        return cart.total > maxCart.total ? cart : maxCart;
      }, carts[0]);

      // 6. Find all products with a discount greater than 15%
      const productsWithHighDiscount = carts
        .flatMap((cart) => cart.products)
        .filter((product) => product.discountPercentage > 15);

      // 7. The user ID of the cart with the highest total quantity
      const cartHighestQuantity = carts.reduce((maxCart, cart) => {
        return cart.totalQuantity > maxCart.totalQuantity ? cart : maxCart;
      }, carts[0]);
      const userIdHighestQuantity = cartHighestQuantity.userId;

      // 8. The most expensive product in all carts (before discount)
      const allProducts = carts.flatMap((cart) => cart.products);
      const mostExpensiveProduct = allProducts.reduce((maxProduct, product) => {
        return product.price > maxProduct.price ? product : maxProduct;
      }, allProducts[0]);

      // 9. The average discounted total per cart
      const averageDiscountedTotal = totalRevenue / carts.length;

      // 10. The top 3 most expensive products after discount

      const top3ProductsAfterDiscount = [...allProducts]
        .sort((a, b) => b.discountedPrice - a.discountedPrice)
        .slice(0, 3);

      displayResults({
        allProductTitles,
        totalQuantity,
        anyCartAbove100K,
        totalRevenue,
        highestTotalCart,
        productsWithHighDiscount,
        userIdHighestQuantity,
        mostExpensiveProduct,
        averageDiscountedTotal,
        top3ProductsAfterDiscount,
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("output").innerHTML =
        "<p>Error fetching data. Please try again later.</p>";
    });
});

function displayResults(results) {
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = `
      <div class="result">
        <h2>1. All Product Titles</h2>
        <p>${results.allProductTitles.join(", ")}</p>
      </div>
      <div class="result">
        <h2>2. Total Quantity of All Products Purchased</h2>
        <p>${results.totalQuantity}</p>
      </div>
      <div class="result">
        <h2>3. Is There Any Cart Above $100,000?</h2>
        <p>${results.anyCartAbove100K ? "Yes" : "No"}</p>
      </div>
      <div class="result">
        <h2>4. Total Revenue from All Carts (Discounted Total)</h2>
        <p>$${results.totalRevenue.toFixed(2)}</p>
      </div>
      <div class="result">
        <h2>5. Cart with the Highest Total Value</h2>
        <p>Cart ID: ${results.highestTotalCart.id} | Total Value: $${
    results.highestTotalCart.total
  }</p>
      </div>
      <div class="result">
        <h2>6. Products with a Discount Greater than 15%</h2>
        <p>${
          results.productsWithHighDiscount.map((p) => p.title).join(", ") ||
          "None"
        }</p>
      </div>
      <div class="result">
        <h2>7. User ID of the Cart with the Highest Total Quantity</h2>
        <p>${results.userIdHighestQuantity}</p>
      </div>
      <div class="result">
        <h2>8. The Most Expensive Product (Before Discount)</h2>
        <p>${results.mostExpensiveProduct.title} - $${
    results.mostExpensiveProduct.price
  }</p>
      </div>
      <div class="result">
        <h2>9. Average Discounted Total per Cart</h2>
        <p>$${results.averageDiscountedTotal.toFixed(2)}</p>
      </div>
      <div class="result">
        <h2>10. Top 3 Most Expensive Products After Discount</h2>
        <p>${results.top3ProductsAfterDiscount
          .map((p) => `${p.title} ($${p.discountedPrice})`)
          .join(", ")}</p>
      </div>
    `;
}
