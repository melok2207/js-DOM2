import { fetchData } from './api.js';
import { displayGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.example.com/data';
    fetchData(url).then(data => displayGallery(data));
});
