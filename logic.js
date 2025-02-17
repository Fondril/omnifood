//// Navigation menu oppening and closing

function onOpenMenuClick() {
  document.getElementById("header").classList.add("openNav");
  document.getElementById("openMenuIcon").classList.add("hidden");
  document.getElementById("closeMenuIcon").classList.remove("hidden");
}
function onCloseMenuClick() {
  document.getElementById("header").classList.remove("openNav");
  document.getElementById("openMenuIcon").classList.remove("hidden");
  document.getElementById("closeMenuIcon").classList.add("hidden");
}

//// Changing header design after hero section

const heroSectionEl = document.getElementById("heroSection");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.getElementById("heroSection").classList.add("mt-20");
      document.getElementById("header").classList.add("fixed");
      document
        .getElementById("header")
        .classList.add("bg-[rgba(255,255,255,0.99)]");
      document.getElementById("header").classList.remove("relative");
      document.getElementById("header").classList.remove("bg-[#fdf2e9]");
    }
    if (ent.isIntersecting === true) {
      document.getElementById("heroSection").classList.remove("mt-20");
      document.getElementById("header").classList.remove("fixed");
      document
        .getElementById("header")
        .classList.remove("bg-[rgba(255,255,255,0.99)]");
      document.getElementById("header").classList.add("relative");
      document.getElementById("header").classList.add("bg-[#fdf2e9]");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSectionEl);

//// Updating footer year to current

const footerYearElement = document.getElementById("footerYear");
const currentYear = new Date().getFullYear();
footerYearElement.innerText = currentYear;
