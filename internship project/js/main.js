let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let searchClose = document.querySelector('#close');
let heartIcon = document.querySelector('#heart-icon');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

searchIcon.onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
}

searchClose.onclick = () =>{
  searchForm.classList.remove('active');
}

heartIcon.onclick = () =>{
  heartIcon.classList.toggle('liked');
  heartIcon.style.transform = 'scale(1.2)';
  setTimeout(() => {
    heartIcon.style.transform = 'scale(1)';
  }, 200);
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

// Ensure download buttons work properly
document.addEventListener('DOMContentLoaded', function() {
  const downloadButtons = document.querySelectorAll('.btn');
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Don't prevent default - let the link work normally
      console.log('Download button clicked:', this.href);
    });
  });
});


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });