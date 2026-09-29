// Progressive enhancement: all company content and anchor links work without JavaScript.
const sectionLinks = [...document.querySelectorAll('.site-header nav a')];
const header = document.querySelector('.site-header');
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let updatePending = false;

function updateNavigation() {
  const readingLine = header.getBoundingClientRect().bottom + 100;
  let currentSection = null;
  for (const section of sections) {
    if (section && section.getBoundingClientRect().top <= readingLine) currentSection = section.id;
  }
  for (const link of sectionLinks) {
    if (link.hash === `#${currentSection}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  updatePending = false;
}

function scheduleNavigationUpdate() {
  if (updatePending) return;
  updatePending = true;
  window.requestAnimationFrame(updateNavigation);
}

window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
document.addEventListener('toggle', scheduleNavigationUpdate, true);
updateNavigation();
