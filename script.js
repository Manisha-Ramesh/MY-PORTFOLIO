// Typing animation
const nameText = "MANISHA R";
let i = 0;
const typingEl = document.querySelector(".typing");

typingEl.textContent = "";

function typeName() {
    if (i < nameText.length) {
        typingEl.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeName, 120);
    }
}

document.addEventListener("DOMContentLoaded", typeName);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.8s ease";
        }
    });
});
