function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    
    const menuItems = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Mediterranean Mezze Platter', price: '12.00€', description: 'Hummus, tzatziki, olives, and pita bread' },
                { name: 'Grilled Halloumi', price: '6.00€', description: 'Served with honey and herbs' },
                { name: 'Stuffed Grape Leaves', price: '8.00€', description: 'Rice, herbs, and pine nuts' }
            ]
        },
        {
            category: 'Main Courses',
            items: [
                { name: 'Moussaka', price: '12.00€', description: 'Traditional beef mince bake with aubergine and potatoes' },
                { name: 'Fried Kalamari', price: '17.00€', description: 'Crisp-fried baby squid with fresh lemon.' },
                { name: 'Lamb Souvlaki', price: '10.00€', description: 'Marinated lamb skewers with tzatziki' }
            ]
        },
        {
            category: 'Desserts',
            items: [
                { name: 'Baklava', price: '7.00€', description: 'Honey-sweetened pastry with nuts' },
                { name: 'Greek Yogurt with Honey', price: '4.00€', description: 'Topped with walnuts and honey' }
            ]
        }
    ];
    
    menuDiv.appendChild(headline);
    
    menuItems.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        menuDiv.appendChild(categoryTitle);
        
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            
            itemDiv.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-description">${item.description}</p>
            `;
            
            menuDiv.appendChild(itemDiv);
        });
    });
    
    return menuDiv;
}

export default createMenu;