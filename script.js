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
    backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
  });

  // ---------------------------
  // FAQ toggle (готово к будущим элементам)
  // ---------------------------
  const faqToggles = document.querySelectorAll(".faq-question");
  faqToggles.forEach(q => {
    q.addEventListener("click", function() {
      const answer = this.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });

  // ---------------------------
  // Registration Form Validation
  // ---------------------------
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    regForm.addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      // Clear previous messages
      const inputs = regForm.querySelectorAll("input, select");
      inputs.forEach(input => {
        input.classList.remove("is-invalid");
      });

      // Full Name
      const fullName = document.getElementById("fullName");
      if (!fullName.value.trim()) {
        fullName.classList.add("is-invalid");
        valid = false;
      }

      // Email
      const email = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
      }

      // Phone
      const phone = document.getElementById("phone");
      if (!phone.value.trim()) {
        phone.classList.add("is-invalid");
        valid = false;
      }

      // Program
      const program = document.getElementById("program");
      if (!program.value) {
        program.classList.add("is-invalid");
        valid = false;
      }

      // Study Mode
      const modes = document.querySelectorAll("input[name='mode']");
      let modeChecked = false;
      modes.forEach(m => { if (m.checked) modeChecked = true; });
      if (!modeChecked) {
        modes.forEach(m => m.classList.add("is-invalid"));
        valid = false;
      }

      // Intake
      const intake = document.getElementById("intake");
      if (!intake.value) {
        intake.classList.add("is-invalid");
        valid = false;
      }

      // Password & Confirm
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      if (!password.value) {
        password.classList.add("is-invalid");
        valid = false;
      }
      if (confirmPassword.value !== password.value || !confirmPassword.value) {
        confirmPassword.classList.add("is-invalid");
        valid = false;
      }

      // Terms
      const terms = document.getElementById("terms");
      if (!terms.checked) {
        terms.classList.add("is-invalid");
        valid = false;
      }

      if (valid) {
        alert("Registration submitted successfully!");
        regForm.reset();
      }
    });
  }

  // ---------------------------
  // Contact Form Validation
  // ---------------------------
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      // Clear previous messages
      const inputs = contactForm.querySelectorAll("input, textarea");
      inputs.forEach(input => input.classList.remove("is-invalid"));

      // Name
      const name = document.getElementById("contactName");
      if (!name.value.trim()) {
        name.classList.add("is-invalid");
        valid = false;
      }

      // Email
      const email = document.getElementById("contactEmail");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
      }

      // Subject
      const subject = document.getElementById("contactSubject");
      if (!subject.value.trim()) {
        subject.classList.add("is-invalid");
        valid = false;
      }

      // Message
      const message = document.getElementById("contactMessage");
      if (!message.value.trim()) {
        message.classList.add("is-invalid");
        valid = false;
      }

      // Anti-spam
      const spamCheck = document.getElementById("spamCheck");
      if (spamCheck.value) {
        valid = false; // bot detected
      }

      if (valid) {
        alert("Your message has been sent successfully!");
        contactForm.reset();
      }
    });
  }

  // ---------------------------
  // Optional: Student-life expandable cards
  // ---------------------------
  const studentCards = document.querySelectorAll(".card-text");
  studentCards.forEach(card => {
    card.addEventListener("click", function() {
      this.classList.toggle("expanded");
    });
  });

});