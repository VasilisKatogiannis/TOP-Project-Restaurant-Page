function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Melina';
    
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1718939050529-1999dc8b3fba?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
    image.alt = 'Restaurant interior';
    image.style.width = '100%';
    image.style.maxWidth = '500px';
    image.style.borderRadius = '8px';
    
    const description = document.createElement('p');
    description.textContent = 'Experience the finest Mediterranean cuisine in the heart of the city. Our family recipes have been passed down through generations, bringing you authentic flavors and warm hospitality. Come join us for an unforgettable dining experience.';
    
    const hours = document.createElement('div');
    hours.innerHTML = `
        <h3>Opening Hours</h3>
        <p>Monday - Thursday: 11:00 AM - 12:00 PM</p>
        <p>Friday - Saturday: 11:00 AM - 01:00 AM</p>
        <p>Sunday: 10:00 AM - 12:00 PM</p>
    `;
    
    homeDiv.appendChild(headline);
    homeDiv.appendChild(image);
    homeDiv.appendChild(description);
    homeDiv.appendChild(hours);
    
    return homeDiv;
}

export default createHome;