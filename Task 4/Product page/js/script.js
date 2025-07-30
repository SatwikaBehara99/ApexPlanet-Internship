// DOM Elements
const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortBy = document.getElementById("sortBy");
const searchInput = document.getElementById("searchInput");

// Dynamically populate category dropdown
const categories = [...new Set(products.map(p => p.category))];
categories.forEach(cat => {
  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  categoryFilter.appendChild(opt);
});

// Convert rating number to stars (e.g., 4.5 => ★★★★½)
function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? "½" : "";
  return "★".repeat(fullStars) + halfStar;
}

// Render all products
function renderProducts(productList) {
  productGrid.innerHTML = "";

  if (productList.length === 0) {
    productGrid.innerHTML = "<p style='text-align:center; font-size:18px;'>No products found.</p>";
    return;
  }

  productList.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" onclick="openProductDetails(${index})">
      <h3>${p.icon} ${p.name}</h3>
      <p><strong>Brand:</strong> ${p.brand}</p>
      <p><strong>₹${p.price}</strong></p>
      <p class="stars">${getStars(p.rating)}</p>
      <p><strong>Category:</strong> ${p.category}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

// Open product detail page
function openProductDetails(index) {
  localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
  window.location.href = "product-details.html";
}

// Filter and sort logic
function filterAndSort() {
  const searchTerm = searchInput.value.toLowerCase();
  let filtered = [...products];

  // Category filter
  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  // Price filter
  const priceVal = priceFilter.value;
  if (priceVal === "low") filtered = filtered.filter(p => p.price < 500);
  else if (priceVal === "mid") filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
  else if (priceVal === "high") filtered = filtered.filter(p => p.price > 1000);

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
  }

  // Sorting
  if (sortBy.value === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === "ratingHigh") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Add product to cart
function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("change", filterAndSort);
sortBy.addEventListener("change", filterAndSort);
searchInput.addEventListener("input", filterAndSort);

// Initial render
renderProducts(products);
