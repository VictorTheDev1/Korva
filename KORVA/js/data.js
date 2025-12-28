const grid = document.getElementById("product-grid");

products.forEach(p => {
  grid.innerHTML += `
    <div class="card">
      <span class="tag">${p.category}</span>
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <div class="price">$${p.price}</div>
      <div class="actions">
        <button class="cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="buy-btn">Buy Now</button>
      </div>
    </div>
  `;
});




