document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  if (toggle && overlay) {
    const setMenuOpen = (isOpen) => {
      toggle.classList.toggle("active", isOpen);
      overlay.classList.toggle("open", isOpen);
      body.classList.toggle("overflow-hidden", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      overlay.setAttribute("aria-hidden", String(!isOpen));
    };

    toggle.addEventListener("click", () => {
      setMenuOpen(!overlay.classList.contains("open"));
    });

    overlay.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("open")) {
        setMenuOpen(false);
        toggle.focus();
      }
    });
  }

  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "var(--color-accent)";
    }
  });

  document.querySelectorAll(".filter-btn").forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";

    setTimeout(() => {
      button.style.transition = "all 0.5s ease";
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, 200 + index * 100);
  });

  const carouselImages = document.querySelectorAll(".carousel-image");

  if (carouselImages.length > 1) {
    let currentIndex = 0;

    setInterval(() => {
      carouselImages[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % carouselImages.length;
      carouselImages[currentIndex].classList.add("active");
    }, 4000);
  }
});
