// Open Add Product Modal
function openAddProductModal() {
    document.getElementById("modalTitle").textContent = "Add New Product";
    document.getElementById("submitButton").textContent = "Add Product";
    document.getElementById("productForm").reset(); // Clear the form
    document.getElementById("productModal").style.display = "block";
}

// Open Edit Product Modal
function openEditProductModal(productName, price, stockStatus, brandName, coverSize, typeOfCover) {
    document.getElementById("modalTitle").textContent = "Edit Product";
    document.getElementById("submitButton").textContent = "Update Product";

    // Populate form fields with existing product data
    document.getElementById("product-name").value = productName;
    document.getElementById("brand-name").value = brandName;
    document.getElementById("cover-size").value = coverSize;
    document.getElementById("type-of-cover").value = typeOfCover;
    document.getElementById("price").value = price;
    document.getElementById("stock-status").value = stockStatus;
    document.getElementById("description").value = `Edit description for ${productName}`;

    document.getElementById("productModal").style.display = "block";
}

// Close the Product Modal
function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// Confirm Delete Action
function confirmDelete() {
    if (confirm("Are you sure you want to delete this product?")) {
        alert("Product deleted!");
    }
}

// Toggle Stock Status
function toggleStockStatus(checkbox) {
    const status = checkbox.checked ? "In Stock" : "Out of Stock";
    checkbox.parentElement.nextElementSibling.textContent = status;
}

// Confirm Logout
function confirmLogout() {
    if (confirm("Are you sure you want to log out?")) {
        window.location.href = "index.html"; // Redirect to login page
    }
}

