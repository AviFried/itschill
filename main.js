import './style.css'

// Scroll Reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Once shown, keep it shown
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Title Interactivity
const title = document.querySelector('.title');
if (title) {
    title.addEventListener('click', () => {
        title.classList.remove('bounce');
        void title.offsetWidth; // Trigger reflow
        title.classList.add('bounce');
    });
    title.style.cursor = 'pointer';
    title.title = "Click me for a vibe check";
}

console.log("It's Chill. Logic loaded.");
