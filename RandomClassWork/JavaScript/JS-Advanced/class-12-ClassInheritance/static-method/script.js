console.log("===== GET / SET =====");

class Product {
  // Static property for assigning unique IDs
  static nextId = 1;

  constructor(name, price) {
    this.id = Product.nextId++; // Assign unique ID and increment counter
    this.name = name;
    this.price = price;
  }

  // Getter for the formatted price
  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  // Setter to apply a discount percentage (e.g., 10 means 10% discount)
  set discount(discountPercentage) {
    this.price = this.price * ((100 - discountPercentage) / 100);
  }
}

// Example usage:
const product1 = new Product("Laptop", 1500);
console.log(
  `Product ID: ${product1.id}, Name: ${product1.name}, Price: ${product1.formattedPrice}`
); // "$1500.00"

// Apply a 10% discount
product1.discount = 10;
console.log(
  `After discount, Product ID: ${product1.id}, Price: ${product1.formattedPrice}`
); // "$1350.00"

// Creating another product to see the auto-incremented id
const product2 = new Product("Phone", 800);
console.log(
  `Product ID: ${product2.id}, Name: ${product2.name}, Price: ${product2.formattedPrice}`
);
