// ==========================
// Smooth Scrolling Navigation
// ==========================

/**
 * Attaches a smooth scrolling behavior to elements.
 * @param {string} buttonId - The ID of the button triggering the scroll.
 * @param {string} targetAttribute - The data attribute of the target section.
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

// Attach listeners to navigation buttons
attachScrollListener("profilContainer", "profilContainer");
attachScrollListener("competencesContainer", "competencesContainer");
attachScrollListener("realisationsContainer", "mesRealContainer");
attachScrollListener("contactContainer", "meContacterText");

// ==========================
// Placeholder for Future Features
// ==========================

/**
* Placeholder for "Mes Réalisations" click event.
* Currently does nothing but is prepared for future implementation.
*/
const mesRealisationsText = document.getElementById("mesRealisationsText");
if (mesRealisationsText) {
  mesRealisationsText.addEventListener("click", function () {
      console.log("Mes Réalisations clicked."); // Debug message
  });
}

// ==========================
// Utility Functions
// ==========================

/**
* Logs a message when an event is triggered.
* @param {string} message - The message to log.
*/
function debugLog(message) {
  console.log(message);
}
