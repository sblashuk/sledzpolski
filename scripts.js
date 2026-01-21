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
(function initTypedEffect() {
    const typed = document.querySelector('.typed');
    if (!typed) return;

    let typedInstance = null;

    const parseTags = (node) => {
        return (node.getAttribute('data-typed-items') || '')
            .trim()
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean);
    }

    const initOrUpdate = () => {
        const tags = parseTags(typed);

        if (!typedInstance) {
            typedInstance = new Typed('.typed', {
                strings: tags,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        } else {
            typedInstance.strings = tags;
            if (typedInstance.el) {
                typedInstance.el.textContent = '';
            }
            typedInstance.reset(true);
        }
    }

    initOrUpdate();

    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.type === 'attributes' && m.attributeName === 'data-typed-items') {
                initOrUpdate();
            }
        }
    })

    observer.observe(typed, { attributes: true, attributeFilter: ['data-typed-items']})
})()

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