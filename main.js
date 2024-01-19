const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header-container h1", scrollRevealOption);

ScrollReveal().reveal(".header-container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about-container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about-container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-container .about-flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover-card-content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs-card", {
  duration: 1000,
  interval: 400,
});

// journals container
ScrollReveal().reveal(".journals-card", {
  ...scrollRevealOption,
  interval: 400,
});
