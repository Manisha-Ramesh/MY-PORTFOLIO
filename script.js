// Typing animation for name
const text = "MANISHA R";
let index = 0;
const speed = 150;
const element = document.querySelector(".typing-text");

element.textContent = "";

function typeEffect() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.transition = "0.8s ease";
        }
    });
});
