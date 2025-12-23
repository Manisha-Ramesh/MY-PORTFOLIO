// Scroll reveal animation (NOT applied to hero text)

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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
