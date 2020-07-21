// Navbar transition

const header = document.querySelector('header');
const jumbotron = document.querySelector('.jumbotron');

let navOptions = {
  threshold: 0.8,
  rootMargin: '-150px 0px 0px 0px',
};

const jumbotronObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    !entry.isIntersecting
      ? header.classList.add('nav-scrolled')
      : header.classList.remove('nav-scrolled');
  });
}, navOptions);

jumbotronObserver.observe(jumbotron);

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

// ROBOTICS PAGE COUNTDOWN
const countDownDate = new Date('Jul 08, 2021 16:37:52').getTime();

let countdown = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = minutes;
  document.getElementById('secs').innerHTML = seconds;

  if (timeleft < 0) {
    clearInterval(countdown);
    document.getElementById('days').innerHTML = '';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('mins').innerHTML = '';
    document.getElementById('secs').innerHTML = '';
    document.getElementsByClassName('countdown').innerHTML = 'TIME UP!!';
  }
}, 1000);
