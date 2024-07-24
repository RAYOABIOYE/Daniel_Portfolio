document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const menuItems = document.getElementById('menuItems');

    menuIcon.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
});
