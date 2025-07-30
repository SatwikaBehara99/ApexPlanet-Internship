// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

// Display items in cart
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartContainer");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h2>Your cart is empty 🛒</h2>";
    return;
  }

  let total = 0;
  cartContainer.innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-details">
          <h3>${item.name}</h3>
          <p>Brand: ${item.brand}</p>
          <p>₹${item.price} x ${item.quantity}</p>
          <p><strong>Subtotal: ₹${item.price * item.quantity}</strong></p>
          <button onclick="removeFromCart(${item.id})">Remove ❌</button>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML += `
    <div class="cart-total">
      <h3>Total Amount: ₹${total}</h3>
      <button onclick="checkout()">Proceed to Checkout</button>
    </div>
  `;
}

// Remove item
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

// Checkout (basic alert)
function checkout() {
  alert("Thank you for your purchase! 🎉");
  localStorage.removeItem("cart");
  displayCartItems();
}
