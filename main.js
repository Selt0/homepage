// Navbar transition

const header = document.querySelector('header');
const sectionOne = document.querySelector('.intro');

let navOptions = {
  threshold: 0.4,
  rootMargin: '-150px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? header.classList.add('nav-scrolled')
      : header.classList.remove('nav-scrolled');
  });
}, navOptions);

sectionOneObserver.observe(sectionOne);

// fade in cards

let appearOptions = {
  rootMargin: '0px 0px -150px 0px',
  threshold: 0.25,
};

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const sliders = document.querySelectorAll('.slide-in');

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
