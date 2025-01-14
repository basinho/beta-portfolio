// Scroll Listener Function
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

// Navigation Scroll Events
attachScrollListener("profilContainer", "profilContainer");
attachScrollListener("competencesContainer", "competencesContainer");
attachScrollListener("realisationsContainer", "mesRealContainer");
attachScrollListener("contactContainer", "contactContainer");

// Smooth Scroll and Card Stacking Effect Without GSAP

document.addEventListener("DOMContentLoaded", function () {
  const projectWrapper = document.querySelector('.projectClass');
  const projects = document.querySelectorAll('.projectClass div');

  // Pass the number of projects to CSS for proper spacing
  const numProjects = projects.length;
  projectWrapper.style.setProperty('--numProjects', numProjects);

  // Scroll-linked animation using ViewTimeline
  const viewTimeline = new ViewTimeline({
    subject: projectWrapper,
    axis: 'block',
  });

  projects.forEach((project, index) => {
    const reverseIndex0 = numProjects - (index + 1);

    // Scroll-Linked Animation
    project.animate(
      {
        transform: [`scale(1)`, `scale(${1 - (0.1 * reverseIndex0)})`],
      },
      {
        timeline: viewTimeline,
        fill: 'forwards',
        rangeStart: `exit-crossing ${(index / numProjects) * 100}%`,
        rangeEnd: `exit-crossing ${((index + 1) / numProjects) * 100}%`,
      }
    );
  });
});
