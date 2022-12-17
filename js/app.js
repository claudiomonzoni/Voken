
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

    function abrirMenuFull () {
      this.abierto = !this.abierto;
      console.log(abierto)
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    };

    menuIco.addEventListener("click", abrirMenuFull);
    //anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

// submemu
const sport = document.querySelector(".sport");
const submenu = document.querySelector("#submenu");

sport.addEventListener("mouseenter", function(e)
{ 

 submenu.classList.add("visibleMenu")
})
window.addEventListener("click", function(e)
{ 
 submenu.classList.remove("visibleMenu")
})

// importo gsap
import gsap from 'gsap'
gsap.from(".logo, ul>li",
{
  stagger:0.1,
  x:400,
  opacity: 0,
  duration: 1 //1 segundo
})
