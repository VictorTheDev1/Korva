const hero = document.getElementById("hero");
const heroText = document.getElementById("hero-text");

const slides = [
  {
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    text: "They Could Be Yours"
  },
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    text: "Upgrade Your Style"
  },
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    text: "Discover New Essentials"
  }
];

let heroIndex = 0;

function updateHero() {
  hero.style.backgroundImage = `url(${slides[heroIndex].img})`;

  // animate text
  heroText.classList.remove("show");
  setTimeout(() => {
    heroText.textContent = slides[heroIndex].text;
    heroText.classList.add("show");
  }, 300);
}

updateHero();

document.querySelector(".right").onclick = () => {
  heroIndex = (heroIndex + 1) % slides.length;
  updateHero();
};

document.querySelector(".left").onclick = () => {
  heroIndex = (heroIndex - 1 + slides.length) % slides.length;
  updateHero();
};

setInterval(() => {
  heroIndex = (heroIndex + 1) % slides.length;
  updateHero();
}, 5000);
