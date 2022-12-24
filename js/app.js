import gsap from "gsap";
import Swiper from 'swiper';
// submemu
const sport = document.querySelector(".sport");
const submenu = document.querySelector("#submenu");

//only phones

var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#nav");
    // const anchor = document.querySelector(".anchor");
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");
      
      this.abierto
      ? mainNav.classList.toggle("menuFullAbierto")
      : mainNav.classList.toggle("desanimaMenu");
    }
    
    menuIco.addEventListener("click", abrirMenuFull);
  
  } else {
    return;
  }
}

sport.addEventListener("mouseenter", function (e) {
  submenu.classList.add("visibleMenu");
});
window.addEventListener("click", function (e) {
  submenu.classList.remove("visibleMenu");
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  lazy: true,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
});

// importo gsap

gsap.from(".logo, ul>li", {
  stagger: 0.1,
  y: 100,
  opacity: 0,
  duration: 1, //1 segundo
});
