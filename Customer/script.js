function applyFilter() {
    const material = document.getElementById('material').value;
    const compatibility = document.getElementById('compatibility').value;
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      const cardMaterial = card.getAttribute('data-material');
      const cardCompatibility = card.getAttribute('data-compatibility');
  
      if ((material === 'all' || cardMaterial === material) && 
          (compatibility === 'all' || cardCompatibility === compatibility)) {
        card.style.display = 'block';  // Show the product
      } else {
        card.style.display = 'none';   // Hide the product
      }
    });
  }
  
