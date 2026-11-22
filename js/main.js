// Product data based on Cambodia market trends
const products = [
    {
        id: 1,
        name: "Serum កែសម្អាតស្បែក",
        category: "សម្ភារៈសម្អាតស្បែក",
        price: 150000,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80"
    },
    {
        id: 2,
        name: "ម៉ាស្កា ផ្លែឈើធម្មជាតិ",
        category: "សម្ភារៈសម្អាតស្បែក",
        price: 85000,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80"
    },
    {
        id: 3,
        name: "កាសឧស្ម័ន Bluetooth",
        category: "គ្រឿងអេឡិចត្រូនិច",
        price: 350000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
        id: 4,
        name: "ស្មាតហ្វូន 5G",
        category: "គ្រឿងអេឡិចត្រូនិច",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"
    },
    {
        id: 5,
        name: "អាវយឺត ម៉ូដថ្មី",
        category: "ម៉ូដ",
        price: 65000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
    },
    {
        id: 6,
        name: "ស្បែកជើង កីឡា",
        category: "ម៉ូដ",
        price: 280000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    }
];

let cart = [];

// Format price in Khmer currency
function formatPrice(price) {
    return price.toLocaleString('km-KH') + ' ៛';
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">បន្ថែមទៅក្នុងទេស</button>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification('បានបន្ថែមទៅក្នុងទេស!');
}

// Update cart display
function updateCart() {
    const cartBtn = document.getElementById('cartBtn');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBtn.textContent = `🛒 ទេស (${totalItems})`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});