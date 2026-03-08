// src/index.js
import "./styles.css";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const mainContent = document.getElementById('content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

mainContent.replaceChildren(loadHome());

homeTab.addEventListener('click', () => {
    mainContent.replaceChildren(loadHome());
});

menuTab.addEventListener('click', () => {
    mainContent.replaceChildren(loadMenu());
});

contactTab.addEventListener('click', () => {
    mainContent.replaceChildren(loadContact());
});