document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const openMenuIcon = document.querySelector('.open-menu');
    const closeMenuIcon = document.querySelector('.close-menu');

    // Hide the mobile menu and show the open menu icon by default
    mobileMenu.classList.add('hidden');
    closeMenuIcon.classList.add('hidden');
    
    mobileMenuToggle.addEventListener('click', function () {
        /**mobileMenu.classList.toggle('open'); */
        openMenuIcon.classList.toggle('hidden');
        closeMenuIcon.classList.toggle('open');
    });

});
