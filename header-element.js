const headerElement = document.querySelector('header');
const headerElementHeight = headerElement.offsetHeight;
const headerID = headerElement.id;
let lastScrollTop = 0;

// Testing first child
const firstSection = document.querySelector('section');

const scrollInput = () => {
    const scrollPosition = window.scrollY;

    // Adds 'fixed' and removes 'transparent class when user has scrolled further than 100px from top
    if (scrollPosition > 70) {
        headerElement.classList.add('header--fixed');
        headerElement.classList.remove('header--transparent');
    }

    // Adds 'transparent' class when user goes back to top of page
    if (scrollPosition == 0 && headerID == 'header--transparent') {
        headerElement.classList.add('header--transparent');
        headerElement.classList.remove('header--fixed');
        headerElement.classList.remove('header--scroll-up');
    }

    // Checks 'scroll down' input
    if (scrollPosition > lastScrollTop && scrollPosition > 150) {
        headerElement.classList.remove('header--scroll-up');
        headerElement.classList.add('header--scroll-down');
    } 

    // Checks 'scroll up' input
    if (scrollPosition < lastScrollTop) {
        headerElement.classList.remove('header--scroll-down');
        headerElement.classList.add('header--scroll-up');
    }

    lastScrollTop = scrollPosition;
}

window.addEventListener('scroll', scrollInput);
window.addEventListener("load", scrollInput);

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
};
  
const debouncedScrollInput = debounce(scrollInput, 200); // Adjust the delay as needed

window.addEventListener('scroll', debouncedScrollInput);
window.addEventListener('load', debouncedScrollInput);