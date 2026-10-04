gsap.registerPlugin(ScrollTrigger);


/* HERO ANIMATION */

gsap.from(".hero-tag", {
    y: 30,
    opacity: 0,
    duration: 0.8
});


gsap.from(".hero-content h1", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.2
});


gsap.from(".hero-content p", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.4
});


gsap.from(".hero-btn", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    delay: 0.6
});


/* SECTION */

gsap.from(".section-heading", {
    scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%"
    },

    y: 50,
    opacity: 0,

    duration: 0.8
});


/* TEST CARDS */

gsap.from(".test-card", {

    scrollTrigger: {
        trigger: ".tests-grid",
        start: "top 85%"
    },

    y: 70,
    opacity: 0,

    duration: 0.7,

    stagger: 0.15
});