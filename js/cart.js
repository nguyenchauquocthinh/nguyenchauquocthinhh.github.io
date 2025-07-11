function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cartItems')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let list = document.getElementById('cartItems');
    let total = 0;
    cart.forEach(item => {
      let li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      list.appendChild(li);
      total += item.price;
    });
    document.getElementById('cartTotal').textContent = total;
  }
});