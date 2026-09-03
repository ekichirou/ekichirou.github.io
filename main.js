const trackedSections = [...document.querySelectorAll("#about, #projects, #blogposts, #hire")];
const navLinks = [...document.querySelectorAll(".top-nav a")];

const activateSection = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.hash === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      activateSection(visible.target.id);
    }
  },
  {
    rootMargin: "-20% 0px -55%",
    threshold: [0.18, 0.4, 0.7],
  }
);

trackedSections.forEach((section) => observer.observe(section));

if (trackedSections[0]) {
  activateSection(trackedSections[0].id);
}
