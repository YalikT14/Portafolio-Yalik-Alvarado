document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  // Solo ejecutar si existen los elementos (móvil)
  if (toggle && overlay) {
    // Toggle del menú hamburguesa
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      overlay.classList.toggle("open");
      body.classList.toggle("overflow-hidden");
    });

    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll(".overlay-menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        overlay.classList.remove("open");
        body.classList.remove("overflow-hidden");
      });
    });

    // Cerrar con tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        toggle.classList.remove("active");
        overlay.classList.remove("open");
        body.classList.remove("overflow-hidden");
      }
    });
  }

  // Añadir clase active a links del menú según la página actual
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "var(--color-accent)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";

    setTimeout(() => {
      btn.style.transition = "all 0.5s ease";
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 200 + index * 100);
  });
});