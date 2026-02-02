// Select all elements with the 'reveal' class
const reveals = document.querySelectorAll(".reveal");

// Use Intersection Observer (Modern & Efficient)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Element screen kulla vanthaachu -> Animation Start
            entry.target.classList.add("active");
        } else {
            // Element screen la irunthu veliya poiruchu -> Reset Animation
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.15 // 15% of the element visible aana udane trigger aagum
});

// Observe all reveal elements
reveals.forEach((el) => observer.observe(el));

// Navbar Smooth Scroll (Keep this as is)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
/* --- TYPEWRITER EFFECT LOGIC --- */
const typeTextSpan = document.querySelector(".typing-text");
const textToType = "Srinathkumar M"; // Inga unnoda name irukku
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType.substring(0, charIndex);
    typeTextSpan.textContent = currentText;

    if (!isDeleting && charIndex < textToType.length) {
        // Typing Mode (Speed: 100ms)
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // Deleting Mode (Speed: 50ms - Fast return)
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        // Switch Mode (Finished Typing or Finished Deleting)
        isDeleting = !isDeleting;
        
        // Logic: Type mudichathum 3s wait pannu (3000ms), 
        // Delete mudichathum 0.5s wait pannu (500ms)
        setTimeout(typeEffect, isDeleting ? 3000 : 500);
    }
}

// Start the animation
typeEffect();