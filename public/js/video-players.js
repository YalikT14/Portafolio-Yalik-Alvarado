import 'player.style/instaplay';
import 'player.style/microvideo';

const mobileViewport = window.matchMedia('(max-width: 768px)');
const videoContainers = document.querySelectorAll('.custom-video-player[data-video-src]');

function renderPlayer(container) {
  const themeName = mobileViewport.matches
    ? 'media-theme-instaplay'
    : 'media-theme-microvideo';

  if (container.firstElementChild?.localName === themeName) {
    return;
  }

  const previousMedia = container.querySelector('[slot="media"]');
  const currentTime = previousMedia?.currentTime || 0;
  const wasPlaying = previousMedia && !previousMedia.paused;
  const theme = document.createElement(themeName);
  const media = document.createElement('video');

  theme.style.cssText =
    '--media-primary-color: #277647; --media-secondary-color: #b4cc4e; --media-accent-color: #ffc600; width: 100%;';
  media.slot = 'media';
  media.src = container.dataset.videoSrc;
  media.setAttribute('playsinline', '');
  media.setAttribute('crossorigin', 'anonymous');

  media.preload = 'metadata';

  if (mobileViewport.matches) {
    media.addEventListener('click', () => {
      if (media.paused) {
        media.play().catch((error) => {
          console.error('No se pudo reproducir el video:', error);
        });
      } else {
        media.pause();
      }
    });
  }

  if (currentTime > 0 || wasPlaying) {
    media.addEventListener(
      'loadedmetadata',
      () => {
        if (currentTime > 0) {
          media.currentTime = currentTime;
        }
        if (wasPlaying) {
          media.play();
        }
      },
      { once: true },
    );
  }

  theme.append(media);
  container.replaceChildren(theme);
}

videoContainers.forEach(renderPlayer);
mobileViewport.addEventListener('change', () => {
  videoContainers.forEach(renderPlayer);
});
