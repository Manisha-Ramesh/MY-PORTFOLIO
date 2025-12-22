// simple fade-in animation
document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.transition = "0.8s";
        }
    });
});
