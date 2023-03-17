const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
