// Scroll to Services Section
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});
