document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    // Quando l'offcanvas inizia ad aprirsi...
    mobileMenu.addEventListener('show.bs.offcanvas', function () {
        menuIcon.classList.add('d-none');    // Nascondi la griglia
        closeIcon.classList.remove('d-none'); // Mostra la X
    });

    // Quando l'offcanvas inizia a chiudersi...
    mobileMenu.addEventListener('hide.bs.offcanvas', function () {
        closeIcon.classList.add('d-none');    // Nascondi la X
        menuIcon.classList.remove('d-none');  // Mostra la griglia
    });
});