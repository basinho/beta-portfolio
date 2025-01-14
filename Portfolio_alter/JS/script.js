import gsap from "../node_modules/gsap/index.js";
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger.js";

/** 
 * @param {string} buttonId 
 * @param {string} targetAttribute 
*/

 
function attachScrollListener(buttonId, targetAttribute) {
  const button = document.getElementById(buttonId);
  if (button) {
      button.addEventListener("click", function () {
          const target = document.querySelector(`[data-scroll-to='${targetAttribute}']`);
          if (target) {
              target.scrollIntoView({ block: "start", behavior: "smooth" });
          }
      });
  }
}


attachScrollListener("profilContainer", "profilContainer");
attachScrollListener("competencesContainer", "competencesContainer");
attachScrollListener("realisationsContainer", "mesRealContainer");
attachScrollListener("contactContainer", "contactContainer");


const mesRealisationsText = document.getElementById("mesRealisationsText");
if (mesRealisationsText) {
  mesRealisationsText.addEventListener("click", function () {
      console.log("Mes Réalisations clicked."); // Debug message
  });
}



/**
* @param {string} message 
*/
function debugLog(message) {
  console.log(message);
}


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".containerReal").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => "+=" + section.offsetWidth, 
            scrub: true,
            pin: true,
            anticipatePin: 1
        },
        defaults: { ease: "none" }
    });
    tl.fromTo(section.querySelector(".projet2"), { xPercent: 100, x: 0 }, { xPercent: 0 })
      .fromTo(section.querySelector(".projet2 img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
});

console.log(gsap); // Si GSAP est chargé, cela affichera un objet dans la console.


