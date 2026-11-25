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

  document.querySelectorAll(".skills-carousel").forEach((carousel) => {
    new Swiper(carousel, {
      slidesPerView: 1,
      spaceBetween: 12,
      navigation: {
        nextEl: carousel.querySelector(".skills-swiper-next"),
        prevEl: carousel.querySelector(".skills-swiper-prev"),
      },
      pagination: {
        el: carousel.querySelector(".skills-swiper-pagination"),
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      watchOverflow: true,
    });
  });

  const projectModal = document.getElementById("project-details-modal");
  const modalTitle = document.getElementById("project-modal-title");
  const modalContent = projectModal?.querySelector(".project-modal-content");
  const closeButton = projectModal?.querySelector(".project-modal-close");
  let modalOpener = null;

  if (projectModal && modalTitle && modalContent && closeButton) {
    document.querySelectorAll(".project-more-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".project-card");
        const title = card?.querySelector(".project-header h3");

        if (!card || !title) {
          return;
        }

        modalOpener = button;
        modalTitle.textContent = title.textContent;
        modalContent.replaceChildren();

        card.querySelectorAll(".project-detail").forEach((detail) => {
          modalContent.append(detail.cloneNode(true));
        });

        button.setAttribute("aria-expanded", "true");
        projectModal.showModal();
      });
    });

    closeButton.addEventListener("click", () => projectModal.close());

    projectModal.addEventListener("click", (event) => {
      if (event.target === projectModal) {
        projectModal.close();
      }
    });

    projectModal.addEventListener("close", () => {
      modalOpener?.setAttribute("aria-expanded", "false");
      modalOpener?.focus();
      modalOpener = null;
      modalContent.replaceChildren();
    });
  }
});