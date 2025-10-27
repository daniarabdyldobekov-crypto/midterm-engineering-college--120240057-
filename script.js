// script.js

document.addEventListener("DOMContentLoaded", function() {

  // ---------------------------
  // Back to top button
  // ---------------------------
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.className = "back-to-top";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // ---------------------------
  // FAQ toggle (готово для future use)
  // ---------------------------
  const faqToggles = document.querySelectorAll(".faq-question");
  faqToggles.forEach(q => {
    q.addEventListener("click", function() {
      const answer = this.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });

});