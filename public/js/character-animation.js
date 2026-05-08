document.addEventListener("DOMContentLoaded", () => {
  // Solo ejecutar si estamos en una página que debe tener el personaje
  const pagesWithCharacter = [
    "/",
    "/about",
    "/portafolio",
    "/portafolio/programacion",
    "/portafolio/diseno",
    "/portafolio/doblaje",
  ];

  const currentPath = window.location.pathname;
  const shouldShowCharacter = pagesWithCharacter.some(
    (page) => currentPath === page || currentPath.startsWith(page)
  );

  if (!shouldShowCharacter) return;

  // Crear el contenedor del personaje
  const characterContainer = document.createElement("div");
  characterContainer.className = "character-container";

  // Crear las tres imágenes
  const images = ["escalerin1.png", "escalerin2.png", "escalerin3.png"];
  const imageElements = images.map((src, index) => {
    const img = document.createElement("img");
    img.src = `/images/${src}`;
    img.alt = `Escalerin ${index + 1}`;
    img.className = `character-image${index === 0 ? " active" : ""}`;
    return img;
  });

  // Agregar imágenes al contenedor
  imageElements.forEach((img) => characterContainer.appendChild(img));

  // Agregar contenedor al body
  document.body.appendChild(characterContainer);

  // Variables para controlar la animación
  let currentFrame = 0;
  let isScrolling = false;
  let scrollTimeout;
  let animationFrame = 0;

  function showFrame(frameIndex) {
    imageElements.forEach((img, index) => {
      img.classList.toggle("active", index === frameIndex);
    });
  }

  function animateWalking() {
    if (!isScrolling) return;

    // Alternar entre frame 1 (escalerin2) y 2 (escalerin3)
    animationFrame = animationFrame === 1 ? 2 : 1;
    showFrame(animationFrame);

    // Continuar la animación después de 150ms
    setTimeout(() => {
      if (isScrolling) {
        animateWalking();
      }
    }, 150);
  }

  // Detectar scroll
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      isScrolling = true;
      animateWalking();
    }

    // Limpiar timeout anterior
    clearTimeout(scrollTimeout);

    // Volver a la imagen estática después de 200ms sin scroll
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      showFrame(0); // Volver a escalerin1
    }, 200);
  });
});