
// =========================================
// MOBILE NAVBAR
// =========================================

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {

    navToggle.addEventListener("click", function () {

        navMenu.classList.toggle("is-open");

        const isOpen = navMenu.classList.contains("is-open");

        navToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

// Certificates বাদ রাখা হয়েছে যাতে train slider ঠিক থাকে.

const revealElements = document.querySelectorAll(
    ".skill-card, .education-item, .project-card, .internship-item"
);

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Add reveal animation to elements

revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    // Small delay between cards

    element.style.transitionDelay = `${(index % 5) * 0.12}s`;

    revealObserver.observe(element);

});
