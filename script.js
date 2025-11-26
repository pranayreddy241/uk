// Ujala Kabab Catering - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
    
    // Easter Egg Discount Reveal
    const easterEgg = document.querySelector('.easter-egg');
    const modal = document.getElementById('discount-modal');
    
    easterEgg.addEventListener('click', function() {
        modal.classList.add('show');
        document.getElementById('discount-code').value = 'THANKS20';
    });
    
    // Close Modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // Form Submission
    const orderForm = document.getElementById('order-form');
    
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your order! We will contact you shortly to confirm details.');
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
