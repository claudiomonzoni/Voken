import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import glide from 'swiper';
import { slideIndex } from "./glide";

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
  gsap.to("#submenu", {
    stagger: 0.3,
    opacity: 1,
  });
});
window.addEventListener("click", function (e) {
  gsap.to("#submenu", {
    opacity: 0,
  });
  submenu.classList.remove("visibleMenu");
});

// logica para escrollear en pc
const card_slide = document.querySelectorAll(".conte-img");
const primerImagen = document.querySelectorAll(".slider img")[0];

// console.log(card_slide)

let arrastrable = false,
  prevPageX,
  prevScrollLeft;
  if(primerImagen){
    let primerImaAncho = primerImagen.clientWidth
    card_slide.forEach((slide) => {
      const card_img = slide.querySelector(".slider").getElementsByTagName("img");
      const card_btn = slide.parentElement.querySelector(".card_derecha");
    
      if (card_img.length > 1) {
        slide.querySelector(".slider").classList.add("cardSlider-extras");
        slide.parentElement.classList.add("muestrate_btn");
    
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
          var laanimacio = gsap.from(elslide, {
            xPercent: -300,
            duration: 1, //1 segundo
          });
        };
    
    
        card_btn.addEventListener("click", (e) => {
          e.preventDefault();
          slide.scrollLeft += primerImaAncho;
          // slide.scrollLeft += e.target
        });
    
        slide.addEventListener("mousedown", arrastrame);
        slide.addEventListener("mousemove", arrastrar);
        slide.addEventListener("mouseup", yanosearrastra);
        slide.addEventListener("mouseleave", yanosearrastra);
      }
    });
  }
  




gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ repeat: 0 });
tl.from(".logo, nav>ul>li", {
  stagger: 0.1,
  y: 100,
  opacity: 0,
  duration: 1, //1 segundo
});

tl.from(
  "#hero, .izq>.bandeja>h1, .izq>.bandeja>p, .logos, .izq>.bandeja>a, .der, .der>img",
  {
    stagger: 0.1,
    y: 100,
    opacity: 0,
    duration: 1, //1 segundo
  },
  "-=1.5"
);

gsap.from("#productos>div", {
  scrollTrigger: "#productos",
  stagger: 0.3,
  y: 100,
  opacity: 0,
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

if (
  window.location.pathname.length == 1 ||
  window.location.pathname.length == 0 ||
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/index"
) {
  //si estoy en el home llamo el carrusel de glide y las animaciones de gsap exclusivas del home
  slideIndex();

  gsap.from(".section-header", {
    scrollTrigger: ".section-header",
    y: 100,
    opacity: 0,
  });
  gsap.from("#storehome", {
    scrollTrigger: "#storehome",
    y: 100,
    opacity: 0,
  });

  gsap.from(".glide__slides>.news", {
    scrollTrigger: ".glide__slides>.news",
    stagger: 0.2,
    y: 100,
    opacity: 0,
    duration: 1, //1 segundo
  });
}

const heroint = document.getElementById("hero-int")
const heroteam = document.getElementById("hero-team")


if (
  heroint
) {

 console.log("estoy en secciones")
}
if (
  heroteam
) {

 console.log("estoy en team")
}