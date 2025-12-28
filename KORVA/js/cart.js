// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.textContent = cart.length;
}

// Add product to cart
function addToCart(card) {
  const product = {
    id: card.dataset.id,
    name: card.dataset.name,
    price: Number(card.dataset.price),
    img: card.dataset.img,
    qty: 1
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

// Attach events
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  document.querySelectorAll(".product-card .cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      addToCart(card);
      btn.classList.add("added");
      btn.textContent = "Added ✓";
      setTimeout(() => {
        btn.classList.remove("added");
        btn.textContent = "Add to Cart";
      }, 1200);
    });
  });
});

function showToast(text) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}


const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("cartOverlay");
const itemsEl = document.getElementById("cartItems");
const totalEl = document.getElementById("cartTotal");

// Open cart
document.querySelector("nav a:last-child").addEventListener("click", e => {
  e.preventDefault();
  openCart();
});

function openCart() {
  drawer.classList.add("show");
  overlay.classList.add("show");
  renderCart();
}

function closeCart() {
  drawer.classList.remove("show");
  overlay.classList.remove("show");
}

overlay.onclick = closeCart;
document.getElementById("closeCart").onclick = closeCart;

// Render cart
function renderCart() {
  itemsEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    itemsEl.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h4>${item.name}</h4>
          <p class="price">$${item.price.toFixed(2)}</p>
          <button class="remove" onclick="removeItem(${i})">Remove</button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = `$${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Close cart if profile opens
profileIcon.addEventListener("click", () => {
  profileDropdown.style.display = profileDropdown.style.display === "flex" ? "none" : "flex";
  cartDrawer.classList.remove("show"); // close cart drawer
});

