/* =========================================
   GSAP
========================================= */

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    /* HERO */

    gsap.from(".hero-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
    });


    gsap.from(".hero-image-wrapper", {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });


    /* SECTION HEADINGS */

    gsap.utils.toArray(".section-heading, .center-heading").forEach((section) => {

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                once: true
            },

            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

    });


    /* TEST CARDS */

    gsap.utils.toArray(".test-card").forEach((card, index) => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true
            },

            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: (index % 3) * 0.08,
            ease: "power2.out"
        });

    });


    /* CATEGORIES */

    gsap.utils.toArray(".category-card").forEach((card, index) => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true
            },

            y: 25,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.05
        });

    });


    /* PACKAGES */

    gsap.utils.toArray(".package-card").forEach((card, index) => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
            },

            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1
        });

    });


    /* DOCTORS */

    gsap.utils.toArray(".doctor-card").forEach((card, index) => {

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true
            },

            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1
        });

    });


    /* ABOUT */

    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            once: true
        },

        x: -50,
        opacity: 0,
        duration: 0.8
    });


    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            once: true
        },

        x: 50,
        opacity: 0,
        duration: 0.8
    });


    /* APPOINTMENT */

    gsap.from(".appointment-form", {
        scrollTrigger: {
            trigger: ".appointment-section",
            start: "top 80%",
            once: true
        },

        x: 50,
        opacity: 0,
        duration: 0.8
    });


    /* PARALLAX */

    gsap.to(".hero-image-card img", {

        yPercent: 7,

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   FAQ
========================================= */

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const currentItem = button.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});