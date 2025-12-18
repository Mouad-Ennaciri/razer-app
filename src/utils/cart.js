const CART_KEY = "cart";

/* ================================
   INTERNAL HELPERS
================================ */

function notifyCartUpdate() {
  window.dispatchEvent(new Event("cart-updated"));
}

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

/* ================================
   PUBLIC API
================================ */

export function getCart() {
  return getStoredCart();
}

export function getCartCount() {
  return getStoredCart().reduce((total, item) => total + item.qty, 0);
}

/* ---------- ADD ---------- */
export function addToCart(product) {
  const cart = getStoredCart();
  const existing = cart.find((i) => i.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartUpdate();
}

/* ---------- DECREASE (−) ---------- */
export function decreaseQty(productId) {
  const cart = getStoredCart();
  const item = cart.find((i) => i.id === productId);

  if (!item) return;

  if (item.qty > 1) {
    item.qty -= 1;
  } else {
    // qty === 1 → remove item
    const index = cart.findIndex((i) => i.id === productId);
    cart.splice(index, 1);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartUpdate();
}

/* ---------- REMOVE COMPLETELY ---------- */
export function removeFromCart(productId) {
  const cart = getStoredCart().filter((i) => i.id !== productId);

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  notifyCartUpdate();
}

/* ---------- CLEAR CART ---------- */
export function clearCart() {
  localStorage.removeItem(CART_KEY);
  notifyCartUpdate();
}
