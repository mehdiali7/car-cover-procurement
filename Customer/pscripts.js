function updatePrice() {
    const quantity = document.getElementById('quantity').value;
    const unitPrice = 99.99;  // Set the unit price of the car cover
    const totalPrice = (unitPrice * quantity).toFixed(2);
    document.getElementById('total-price').textContent = `$${totalPrice}`;
}
