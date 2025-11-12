// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Section fade reveal
  const fadeElements = document.querySelectorAll(".section, .card, .skills-grid span");
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) el.classList.add("visible");
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  
  // Typewriter quote
  const quote = document.querySelector(".quote");
  if (quote) {
    const text = quote.textContent.trim();
    quote.textContent = "";
    let i = 0;
    function type() {
      if (i < text.length) {
        quote.textContent += text.charAt(i);
        i++;
        setTimeout(type, 45);
      }
    }
    setTimeout(type, 600);
  }
  
  // Simple particle motion
  const canvas = document.createElement("canvas");
  document.getElementById("particles").appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let width, height, particles;
  
  function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    }));
  }
  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  window.addEventListener("resize", init);
  init();
  animate();
  // Theme toggle logic
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    toggleBtn.textContent = isLight ? "🌙" : "☀️";
  });
}

// Intro fade
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader.classList.add("hidden"), 1200);
  });
// ===== Parallax depth effect =====
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector(".hero-content");
    const particles = document.getElementById("particles");
  
    // hero text drifts upward slightly
    if (hero) hero.style.transform = `translateY(${scrollY * 0.2}px)`;
    // particle field drifts more slowly, giving depth
    if (particles) particles.style.transform = `translateZ(-300px) translateY(${scrollY * 0.05}px) scale(1.3)`;
  });
    // ===== Image fade-in observer =====
const imgs = document.querySelectorAll("img");
const imgObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);
imgs.forEach(img => imgObserver.observe(img));
