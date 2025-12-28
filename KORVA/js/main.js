
const profileIcon = document.getElementById("profileIcon");
const profileDropdown = document.getElementById("profileDropdown");

profileIcon.addEventListener("click", (e) => {
  e.preventDefault();
  profileDropdown.style.display = profileDropdown.style.display === "flex" ? "none" : "flex";
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});


// Make sure cart drawer variables match
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

// Profile toggle
profileIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = profileDropdown.style.display === "flex";
  profileDropdown.style.display = isOpen ? "none" : "flex";

  // Close cart if profile opens
  if (!isOpen) {
    cartDrawer.classList.remove("show");
    cartOverlay.classList.remove("show");
  }
});

// Close profile dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});

// Open cart
document.querySelector("nav a:last-child").addEventListener("click", e => {
  e.preventDefault();
  cartDrawer.classList.add("show");
  cartOverlay.classList.add("show");

  // Close profile dropdown when cart opens
  profileDropdown.style.display = "none";

  renderCart();
});

