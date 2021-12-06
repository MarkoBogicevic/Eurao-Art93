// ANIMATIONS

const tl = gsap.timeline({ defaults: { duration: 1.2 } });
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-text",
    start: "center bottom"
  }
});
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card",
    start: "center bottom"
  }
});
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".features-header",
    start: "center bottom"
  }
});
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials-header",
    start: "center bottom"
  }
});

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "figure",
    start: "center bottom"
  }
});

tl.from(".animate", { opacity: 0, y: 40, stagger: 0.4 });
tl.from(".main-head", { opacity: 0, y: "-100%" }, "-=1");
tl.from(".intro-img", { opacity: 0, y: 40 }, "-=1");

tl2.from(".about-text", { opacity: 0, y: 40, duration: 1 });

tl3.from(".card", { opacity: 0, y: 40, duration: 1.2, stagger: 0.2 });

tl4.from(".features-header", { opacity: 0, y: 40, duration: 1 });

tl5.from(".testimonials-header", { opacity: 0, y: 40, duration: 1 });

tl6.from("figure", { opacity: 0, y: 40, duration: 1 });

// // TESTIMONIALS GLIDER
// new Glider(document.querySelector(".glider"), {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   draggable: true,
//   dots: "#dots",
//   arrows: {
//     prev: ".glider-prev",
//     next: ".glider-next"
//   }
// });

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_links li");
const introText = document.querySelector(".intro-text");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  document.body.classList.toggle("hide");
  document.querySelector("html").classList.toggle("hide");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    document.body.classList.remove("hide");
    document.querySelector("html").classList.remove("hide");
  });
});