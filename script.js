// Typing Effect
const text = ["AI & Data Science Student", "Aspiring Data Analyst", "Power BI Developer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    const typingElement = document.querySelector(".typing");
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
