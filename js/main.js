

//animasi dari michalsnik
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active');
  document.addEventListener('click', closeSidebarOutside);
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
  document.removeEventListener('click', closeSidebarOutside);
}

function closeSidebarOutside(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      hideSidebar();
  }
}

// Add event listener for menu-button
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', showSidebar);
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.sidebar .dropdown-toggle');
  
  dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent the click from closing the sidebar
      this.parentElement.classList.toggle('active');
  });
});


window.onload = function() {
    // Ambil semua tautan di dalam navbar
    const navLinks = document.querySelectorAll('#header ul li a');
  
    // Loop melalui setiap tautan
    navLinks.forEach(link => {
      // Periksa apakah URL tautan sama dengan URL halaman saat ini
      if (link.href === window.location.href) {
        // Jika ya, tambahkan kelas 'active'
        link.classList.add('active');
      }
  
      // Tambahkan event listener untuk menangani hover
      link.addEventListener('mouseover', () => {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => link.classList.remove('active'));
        // Tambahkan kelas 'active' pada tautan yang dihover
        link.classList.add('active');
      });
  
      link.addEventListener('mouseout', () => {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => link.classList.remove('active'));
        // Kembalikan kelas 'active' pada tautan yang sesuai dengan halaman saat ini
        if (link.href === window.location.href) {
          link.classList.add('active');
        }
      });
    });
  }

  document.addEventListener("scroll", function() {
    const secSection = document.getElementById("sec");
    const exploreButton = document.getElementById("btn");

    const secPosition = secSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (secPosition < screenPosition) {
        exploreButton.style.display = "none";
    } else {
        exploreButton.style.display = "block";
    }
});

//access img
let slideimages = document.querySelectorAll('.slides img');
//access next and prev
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');



//access indicator
let dots = document.querySelectorAll('.dot');
var counter = 0;

//code next button
next.addEventListener('click', slideNext);
function slideNext(){
  slideimages[counter].style.animation = 'next1 0.5s ease-in-out forwards';
  if(counter >= slideimages.length-1){
      counter = 0;
  }
  else{
      counter++;
  }
  slideimages[counter].style.animation = 'next2 0.5s ease-in-out forwards';
  indicators();
}

//code prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
  slideimages[counter].style.animation = 'prev1 0.5s ease-in-out forwards';
  if(counter == 0){
      counter = slideimages.length-1;
  }
  else{
      counter--;
  }
  slideimages[counter].style.animation = 'prev2 0.5s ease-in-out forwards';
  indicators();
}

//auto slide
function autoSliding(){
  deletInterval = setInterval(timer, 4000);
  function timer(){
    slideNext();
    indicators();
  }
}
autoSliding();

//stop auto slide when mouse over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
  clearInterval(deletInterval);
})

//resume slide when mouse out
container.addEventListener('mouseout', autoSliding);

// add & remove active class from indicator
function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// add click event to indicator
function switchimage(currentimage){
  currentimage.classList.add('active');
  var imageid = currentimage.getAttribute('attr');
  if(imageid > counter){
    slideimages[counter].style.animation = 'next1 0.5s ease-in-out forwards';
    counter = imageid;
    slideimages[counter].style.animation = 'next2 0.5s ease-in-out forwards';
  }
  else if(imageid == counter){
    return;
  }
  else{
    slideimages[counter].style.animation = 'prev1 0.5s ease-in-out forwards';
    counter = imageid;
    slideimages[counter].style.animation = 'prev2 0.5s ease-in-out forwards';
  }
  indicators();

  var imageid = parseInt(currentimage.getAttribute('attr'));
    if(imageid !== counter) {
        slideimages[counter].style.animation = imageid > counter ? 'next1 0.5s ease-in-out forwards' : 'prev1 0.5s ease-in-out forwards';
        counter = imageid;
        slideimages[counter].style.animation = imageid > counter ? 'next2 0.5s ease-in-out forwards' : 'prev2 0.5s ease-in-out forwards';
        indicators();
    }
}

console.log("Number of images:", slideimages.length);
console.log("Number of dots:", dots.length);

function indicators(){
    console.log("Current counter:", counter);
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// client

// document.addEventListener('DOMContentLoaded', function(){
//   const slider = document.querySelector('.slider');
//   const slides = document.querySelectorAll('.slide');
//   const preve = document.querySelector('.preve');
//   const nex = document.querySelector('.nex');
//   let currentIndex = 0;

//   function updateSlider(){
//     slider.style.transform = 'translateX(-${currentIndex * 100}%)';
//   }

//   preve.addEventListener('click', function(){
//     if(currentIndex > 0){
//       currentIndex--;
//       updateSlider();
//     }
//   });

//   nex.addEventListener('click', function(){
//     if(currentIndex < slides.length - 1){
//       currentIndex--;
//       updateSlider();
//     }
//   });
// });