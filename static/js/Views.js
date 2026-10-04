document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
                  GSAP
    ========================================= */

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
                  CARD ANIMATION
    ========================================= */

    gsap.from(".test-card", {

        scrollTrigger: {
            trigger: ".tests-container",

            start: "top 85%"
        },

        y: 45,

        opacity: 0,

        duration: 0.7,

        stagger: 0.08,

        ease: "power3.out"

    });


    /* =========================================
              BOOK TEST BUTTON
    ========================================= */

    const bookButtons =
        document.querySelectorAll(".book-test");


    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();


            const testName =
                this.getAttribute("data-test");


            const testPrice =
                this.getAttribute("data-price");


            const url =
                `/Appointment/?test=${encodeURIComponent(testName)}&price=${encodeURIComponent(testPrice)}`;


            window.location.href = url;

        });

    });


});