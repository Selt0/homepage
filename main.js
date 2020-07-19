const header = document.querySelector('header');
const sectionOne = document.querySelector('.intro');

let options = {
  rootMargin: '-150px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? header.classList.add('nav-scrolled')
      : header.classList.remove('nav-scrolled');
  });
}, options);

sectionOneObserver.observe(sectionOne);
