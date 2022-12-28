import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Swiper from 'swiper';
import { slideIndex } from "./glide";
slideIndex();
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




// logica para escrollear en pc
const card_slide = document.querySelector(".slider");
let arrastrable = false, prevPageX, prevScrollLeft;
const arrastrame = (e) => {
  arrastrable = true;
  prevPageX = e.pageX;
  prevScrollLeft = card_slide.scrollLeft;
};
const arrastrar = (e) => {
  if (!arrastrable) return;
  e.preventDefault();
  let posDiff = e.pageX - prevPageX
  card_slide.scrollLeft = prevScrollLeft -posDiff
};
const yanosearrastra = () => {
  arrastrable = false;
};

card_slide.addEventListener("mousedown", arrastrame);
card_slide.addEventListener("mousemove", arrastrar);
card_slide.addEventListener("mouseup", yanosearrastra);




// gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo, nav>ul>li", {
  stagger: 0.1,
  y: 100,
  opacity: 0,
  duration: 1, //1 segundo
});

gsap.from(".glide__slides>.news", {
  scrollTrigger: ".glide__slides>.news",
  stagger: 0.2,
  y: 100,
  opacity: 0,
  duration: 1, //1 segundo
});

gsap.from("#sport>div", {
  scrollTrigger: {
    trigger: "#sport>div",
    // toggleActions: "restart pause none pause"
  },
  stagger: 0.3,
  y: 100,
  opacity: 0,
  duration: 2, //1 segundo
});
