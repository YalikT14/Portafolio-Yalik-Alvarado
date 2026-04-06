document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  // Toggle del menú hamburguesa
  if (toggle && overlay) {
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
  }
});