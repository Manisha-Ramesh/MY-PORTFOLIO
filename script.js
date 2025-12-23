// Scroll reveal animation
// Applied ONLY to sections that have the class "reveal"
// NOT applied to hero text (MANISHA R, subtitle)

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 80) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
    });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once when page loads
window.addEventListener("load", revealOnScroll);

