
const images = document.querySelectorAll('.gallery-image');


const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');


images.forEach(image => {
  image.addEventListener('click', (event) => {
    lightbox.style.display = 'flex';
    lightboxImage.src = event.target.src;
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
