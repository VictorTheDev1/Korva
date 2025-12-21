const hero = document.querySelector(".hero");
const leftArrow = document.querySelector(".hero-arrow.left");
const rightArrow = document.querySelector(".hero-arrow.right");

const heroImages = [
  "images/hero1.png",
  "images/hero2.svg",
  "images/hero3.svg"
];

let currentIndex = 0;

// Set initial image
hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;

function showSlide(index) {
  hero.style.backgroundImage = `url(${heroImages[index]})`;
}

// Manual controls
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  showSlide(currentIndex);
});

leftArrow.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + heroImages.length) % heroImages.length;
  showSlide(currentIndex);
});

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  showSlide(currentIndex);
}, 5000);

// Add to cart functionality
let cartCount = 0;

const cartButtons = document.querySelectorAll(".card button:first-child");

cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    alert("Added to cart 🛒");
    console.log("Cart items:", cartCount);
  });
});

// Buy Now functionality
const buyButtons = document.querySelectorAll(".buy");

buyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Redirecting to checkout 💳");
    // window.location.href = "checkout.html";
  });
});

// PAGINATION FUNCTIONALITY
const pages = document.querySelectorAll(".pagination span");

pages.forEach(page => {
  page.addEventListener("click", () => {
    pages.forEach(p => p.classList.remove("active"));
    page.classList.add("active");

    console.log("Page selected:", page.innerText);
  });
});

// AUTO SLIDE HERO
setInterval(() => {
  slideIndex = (slideIndex + 1) % heroImages.length;
  renderHero();
}, 5000);
