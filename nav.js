document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const leftnav = document.querySelector('.leftNav');

  burger.addEventListener('click', function () {
      leftnav.classList.toggle('h-nav');
  });
});

