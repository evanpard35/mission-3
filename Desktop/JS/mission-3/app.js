// Arahkan ke halaman register
document.getElementById('goToRegister')?.addEventListener('click', function () {
    window.location.href = 'register.html';
});

// Arahkan ke halaman login
document.getElementById('goToLogin')?.addEventListener('click', function () {
    window.location.href = 'login.html';
});

// Proses pendaftaran
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Kata sandi tidak cocok!');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Pendaftaran berhasil! Silakan masuk.');
    window.location.href = 'login.html';
});

// Proses login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login berhasil!');
        window.location.href = 'index.html';
    } else {
        alert('Username atau kata sandi salah!');
    }
});

$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
});

