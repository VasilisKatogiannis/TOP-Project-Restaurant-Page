/**
 * Restaurant Page Project
 * Created by: Vasilis Katogiannis
 * Date: September 2025
 * The Odin Project - JavaScript Course
 */

import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

console.log('Restaurant page loaded!');

function loadPage(pageLoader) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(pageLoader());
}

function setActiveTab(activeTabId) {
    const tabs = ['home-tab', 'menu-tab', 'contact-tab'];
    
    tabs.forEach(tabId => {
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.classList.remove('active');
        }
    });
    
    const activeTab = document.getElementById(activeTabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function initializeWebsite() {
    // Load home page by default
    loadPage(createHome);
    setActiveTab('home-tab');
    
    // Add event listeners for tab switching
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');
    
    homeTab.addEventListener('click', () => {
        loadPage(createHome);
        setActiveTab('home-tab');
    });
    
    menuTab.addEventListener('click', () => {
        loadPage(createMenu);
        setActiveTab('menu-tab');
    });
    
    contactTab.addEventListener('click', () => {
        loadPage(createContact);
        setActiveTab('contact-tab');
    });
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);