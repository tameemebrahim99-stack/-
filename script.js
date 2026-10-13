
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        "h1, h2, h3, p, li, section"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
