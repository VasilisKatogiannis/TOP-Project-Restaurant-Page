function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <div class="contact-section">
            <h3>Visit Us</h3>
            <p>Melinas Merkouri 39<br>
            Preveza, 48100</p>
        </div>
        
        <div class="contact-section">
            <h3>Call Us</h3>
            <p>Phone: (30) 26820 25780<br>
            Reservations: (30) 26820 25770</p>
        </div>
        
        <div class="contact-section">
            <h3>Email</h3>
            <p>info@celest.com<br>
            reservations@celest.com</p>
        </div>
        
        <div class="contact-section">
            <h3>Reservation</h3>
            <p>We recommend making a reservation, especially for dinner service. Call us or visit in person to book your table.</p>
        </div>
    `;
    
    contactDiv.appendChild(headline);
    contactDiv.appendChild(contactInfo);
    
    return contactDiv;
}

export default createContact;