// CÂU 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// CÂU 2: Khởi tạo mảng products (≥ 6 sản phẩm, ≥ 2 danh mục)
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 10, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 0, "Electronics", true),
  new Product(3, "MacBook Air M2", 32000000, 5, "Electronics", true),
  new Product(4, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(5, "Apple Watch", 12000000, 0, "Accessories", false),
  new Product(6, "Chuột Logitech", 1500000, 15, "Accessories", true)
];

// CÂU 3: Tạo mảng mới chỉ chứa name, price
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));

console.log("Câu 3:", namePriceList);

// CÂU 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);

console.log("Câu 4:", inStockProducts);

// CÂU 5: Có ít nhất 1 sản phẩm giá > 30.000.000?
const hasExpensiveProduct = products.some(p => p.price > 30000000);

console.log("Câu 5:", hasExpensiveProduct);

// CÂU 6: Tất cả sản phẩm "Accessories" có đang bán không?
const allAccessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log("Câu 6:", allAccessoriesAvailable);

// CÂU 7: Tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);

console.log("Câu 7: Tổng giá trị kho =", totalInventoryValue);

// CÂU 8: Dùng for...of in: Tên – Danh mục – Trạng thái
console.log("Câu 8:");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// CÂU 9: Dùng for...in in tên thuộc tính & giá trị
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}



// CÂU 10: Lấy danh sách tên sản phẩm đang bán & còn hàng
const sellingAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingAndInStockNames);