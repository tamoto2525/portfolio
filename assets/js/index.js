window.onload = function () {
// smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// header menu
  const menuClass = document.getElementById('GlobalMenu').classList;
  const menuBtnClass = document.getElementById('MenuBtn').classList;
  document.getElementById('MenuBtn').addEventListener("click", (event) => {
    menuClass.toggle('is-open');
    menuBtnClass.toggle('is-open');
  });

  document.querySelectorAll('a[data-headMenu]').forEach(target => {
    target.addEventListener('click', function (e) {
      e.preventDefault();
      menuClass.toggle('is-open');
      menuBtnClass.toggle('is-open');
    });
  });
};