window.onscroll = function() {myFunction()};

var sticky;

function myFunction() {
  var header = document.getElementById("myHeader");
  if (!header) return; // Add a null check to avoid errors
  sticky = header.offsetTop;
  
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('.body');
  let currentImage = 0;
  const images = [
    '/Img/home-img.jpg',
    '/Img/home2.webp',
    '/Img/home3.jpg',
    '/Img/home4.jpg',
    '/Img/home5.png',
    /* Add more images here */
  ];

  function changeImage() {
    body.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeImage, 5000); // Change image every 5 seconds
});

const mobileHeader = document.querySelector('.mobile_header');

const header = document.getElementById('header');

mobileHeader.addEventListener('click', function() {
  header.style.display = header.style.display === 'block' ? 'none' : 'block';
});