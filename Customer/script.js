// Redirect to Product Detail Page
function viewProduct(productId) {
  // Store the clicked product ID (simulating dynamic behavior)
  localStorage.setItem('selectedProduct', productId);

  // Redirect to the Product Detail Page
  window.location.href = 'product-detail.html';
}
