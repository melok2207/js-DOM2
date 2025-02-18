import { fetchData } from './api.js';

export function displayGallery(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.title;
        gallery.appendChild(img);
    });
}
