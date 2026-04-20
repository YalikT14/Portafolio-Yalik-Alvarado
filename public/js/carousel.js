// Inicializar carruseles cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar todos los carruseles de la página
  const carousels = document.querySelectorAll(".project-carousel");

  carousels.forEach((carousel) => {
    new Swiper(carousel, {
      // Parámetros básicos
      loop: true,
      centeredSlides: true,
      spaceBetween: 20,

      // Autoplay
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Navegación
      navigation: {
        nextEl: carousel.querySelector(".swiper-button-next"),
        prevEl: carousel.querySelector(".swiper-button-prev"),
      },

      // Paginación
      pagination: {
        el: carousel.querySelector(".swiper-pagination"),
        clickable: true,
        dynamicBullets: true,
      },

      // Efecto
      effect: "coverflow",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },

      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },

      // Keyboard control
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // Lazy loading
      lazy: {
        loadPrevNext: true,
      },
    });
  });
});