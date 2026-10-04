```javascript
/* ================================
   GSAP SETUP
================================ */

gsap.registerPlugin(ScrollTrigger);


/* ================================
   HERO ANIMATION
================================ */

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".appointment-hero .small-title", {
        y: 30,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero-content h1", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.4")

    .from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 0.7
    }, "-=0.5")

    .from(".hero-decoration", {
        scale: 0.5,
        opacity: 0,
        rotation: -80,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.8");


/* ================================
   NAVBAR
================================ */

gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});


/* ================================
   APPOINTMENT SECTION
================================ */

gsap.from(".appointment-info", {

    scrollTrigger: {
        trigger: ".appointment-section",
        start: "top 75%"
    },

    x: -80,
    opacity: 0,

    duration: 1,

    ease: "power3.out"
});


gsap.from(".appointment-card", {

    scrollTrigger: {
        trigger: ".appointment-section",
        start: "top 75%"
    },

    x: 80,
    opacity: 0,

    duration: 1,

    ease: "power3.out"
});


/* ================================
   INFO ITEMS
================================ */

gsap.from(".info-item", {

    scrollTrigger: {
        trigger: ".info-list",
        start: "top 80%"
    },

    y: 35,
    opacity: 0,

    duration: 0.7,

    stagger: 0.2
});


/* ================================
   FORM INPUT ANIMATION
================================ */

gsap.from(".form-group", {

    scrollTrigger: {
        trigger: ".appointment-card",
        start: "top 75%"
    },

    y: 20,
    opacity: 0,

    duration: 0.5,

    stagger: 0.08
});


/* ================================
   BUTTON HOVER
================================ */

const button = document.querySelector(".submit-btn");

button.addEventListener("mouseenter", () => {

    gsap.to(button, {
        scale: 1.02,
        duration: 0.25
    });

});

button.addEventListener("mouseleave", () => {

    gsap.to(button, {
        scale: 1,
        duration: 0.25
    });

});


/* ================================
   FORM SUBMIT
================================ */

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const buttonText =
        document.querySelector(".submit-btn span");

    buttonText.textContent = "Appointment Submitted ✓";

    gsap.to(".submit-btn", {

        backgroundColor: "#a97858",

        duration: 0.4

    });

    gsap.from(".submit-btn", {

        scale: 0.95,

        duration: 0.4,

        ease: "back.out(2)"

    });

});
```
