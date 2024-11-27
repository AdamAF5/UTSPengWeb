//NavBar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

// Smooth scrolling for the "Lihat Rekomendasi" button
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#recommendations').scrollIntoView({ behavior: 'smooth' });
});


//swiper

var swiper = new Swiper(".trending-content", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true, // Tambahkan loop untuk scrolling terus-menerus
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

