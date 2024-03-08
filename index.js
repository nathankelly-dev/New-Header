const headerElement = document.querySelector('header');
const headerElementHeight = headerElement.offsetHeight;
const headerID = headerElement.id;
let lastScrollTop = 0;

const scrollInput = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        headerElement.classList.add('header--fixed');
        headerElement.classList.remove('header--transparent')
    }

    if (scrollPosition == 0 && headerID == 'header--transparent') {
        headerElement.classList.add('header--transparent')
    }

    if (scrollPosition == headerElementHeight && headerID == 'header--transparent') {
        headerElement.classList.add('header--transparent')
    }

    if (scrollPosition > lastScrollTop && scrollPosition > 70) {
        // Scrolling down
        headerElement.classList.remove('header--scroll-up');
        headerElement.classList.add('header--scroll-down');
    } 
    if (scrollPosition < lastScrollTop) {
        // Scrolling up
        headerElement.classList.remove('header--scroll-down');
        headerElement.classList.add('header--scroll-up');
    }

    lastScrollTop = scrollPosition;
}

window.addEventListener('scroll', scrollInput);