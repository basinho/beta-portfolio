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