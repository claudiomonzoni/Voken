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
const card_slide = document.querySelectorAll(".conte-img");
let arrastrable = false,
  prevPageX,
  prevScrollLeft;

card_slide.forEach((slide) => {
  const card_img = slide.querySelector(".slider").getElementsByTagName("img");

  if (card_img.length > 1) {
    slide.querySelector(".slider").classList.add("cardSlider-extras");

    const arrastrame = (e) => {
      arrastrable = true;
      prevPageX = e.pageX;
      prevScrollLeft = slide.scrollLeft;
      slide.querySelector(".slider").classList.remove("alhover");
    };
    const arrastrar = (e) => {
      if (!arrastrable) return;
      e.preventDefault();
      let posDiff = e.pageX - prevPageX;
      slide.scrollLeft = prevScrollLeft - posDiff;
    };
    const yanosearrastra = () => {
      arrastrable = false;
    };
    const alhover = (e) => {
      const elslide = slide.querySelector(".slider");
      var laanimacion = gsap.from(elslide, {
        xPercent: -300,
  
      });
      // aldehover(laanimacion)
    };
    const aldehover = (laanimacion) => {
      setTimeout(() => {
        console.log(laanimacion)  
      }, 2000);
    };

    slide.addEventListener("mousedown", arrastrame);
    slide.addEventListener("mousemove", arrastrar);
    slide.addEventListener("mouseup", yanosearrastra);
    slide.addEventListener("mouseleave", yanosearrastra);
    // slide.addEventListener("mouseleave", aldehover);
    slide.addEventListener("mouseenter", alhover);
  }
});

// card_slide.addEventListener("mousedown", arrastrame);
// card_slide.addEventListener("mousemove", arrastrar);
// card_slide.addEventListener("mouseup", yanosearrastra);

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
