// JavaScript for FAQ toggle functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector("h3");
    
    // Add click event listener to each question
    question.addEventListener("click", () => {
        // Check if the clicked FAQ is already open
        const isOpen = item.classList.contains("open");

        // Close all other FAQ items
        faqItems.forEach(i => i.classList.remove("open"));

        // If the clicked FAQ was not open, open it
        if (!isOpen) {
            item.classList.add("open");
        }
    });
});

// JavaScript for opening supplier login/signup interface
const supplierButton = document.querySelector(".supplier-btn");

if (supplierButton) {
    supplierButton.addEventListener("click", () => {
        window.location.href = "supplier-login.html"; // Redirect to supplier login/signup page
    });
}
