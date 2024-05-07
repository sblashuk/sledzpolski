window.addEventListener('DOMContentLoaded', event => {
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navmenu = [].slice.call(document.querySelectorAll('#navmenu .nav-link'));
    navmenu.map(function (navMenuItem) {
        navMenuItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

/**
 * Custom navigation
 */
const navLinks = [...document.querySelectorAll('#navmenu .nav-link')]
const navActive = () => {
    let position = window.scrollY + 91
    const isScrolledToBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    navLinks.forEach((navLink, index) => {
        if (!navLink.hash) return;
        let section = document.querySelector(navLink.hash)
        if (!section) return;
        if (isScrolledToBottom) {
            navLink.classList.remove('active')
        } else if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navLink.classList.add('active')
        } else {
            navLink.classList.remove('active')
        }
    })

    if (isScrolledToBottom) {
        navLinks[navLinks.length - 1].classList.add('active');
    }
}
window.addEventListener('load', navActive);
document.addEventListener('scroll', navActive);

/**
 * Hero type effect
 */
const typed = document.querySelector('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});