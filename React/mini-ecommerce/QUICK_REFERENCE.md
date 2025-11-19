# Quick Reference Guide

## Running the Application

```bash
# Navigate to project
cd mini-ecommerce

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## File Quick Links

| File | Purpose | Lines |
|------|---------|-------|
| `src/App.jsx` | Main app with routing | 23 |
| `src/components/Navigation.jsx` | Header/navbar | 24 |
| `src/components/ProductCard.jsx` | Product display card | 46 |
| `src/context/CartContext.jsx` | Cart state management | 65 |
| `src/data/products.js` | Mock product data | 108 |
| `src/pages/Home.jsx` | Home page | 49 |
| `src/pages/Products.jsx` | Products listing & filters | 165 |
| `src/pages/Cart.jsx` | Shopping cart | 132 |

## Key Features Map

### 🏠 Home Page (`/`)
- Featured products section
- Feature highlights
- Call-to-action buttons
- Responsive grid

### 🛍️ Products Page (`/products`)
**Filters:**
- ✓ Category
- ✓ Brand
- ✓ Price Range ($0-$200)
- ✓ Rating (0-5 stars)

**Sorting:**
- ✓ Name (A-Z)
- ✓ Price (Low→High)
- ✓ Price (High→Low)
- ✓ Rating (Highest first)

**Responsive:**
- ✓ Mobile filter toggle
- ✓ Sticky sidebar
- ✓ Responsive grid

### 🛒 Cart Page (`/cart`)
- ✓ Item list with images
- ✓ Quantity adjustment
- ✓ Remove items
- ✓ Order summary
- ✓ Tax calculation (10%)
- ✓ Shipping calculation
- ✓ Free shipping incentive ($50+)

## State Management

### Cart Context
```javascript
{
  cartItems: [],      // Array of cart items
  addToCart,          // Function to add
  removeFromCart,     // Function to remove
  updateQuantity,     // Function to update qty
  clearCart,          // Function to clear
  getTotalPrice       // Function to get total
}
```

## Component Hierarchy

```
App
├── CartProvider
├── Router
├── Navigation
└── Routes
    ├── / → Home
    │   └── ProductCard (6 items)
    ├── /products → Products
    │   ├── Sidebar Filters
    │   └── ProductCard (filtered/sorted)
    └── /cart → Cart
        └── Cart Items & Summary
```

## Data Structures

### Product Object
```javascript
{
  id: 1,
  name: "Wireless Headphones",
  price: 79.99,
  category: "Electronics",
  brand: "AudioTech",
  rating: 4.5,
  image: "https://via.placeholder.com/300x300",
  description: "Description here"
}
```

### Cart Item Object
```javascript
{
  ...product,           // All product fields
  quantity: 2           // User-set quantity
}
```

## API Reference

### useCart Hook
```javascript
const {
  cartItems,           // Array of items in cart
  addToCart,           // (product) → void
  removeFromCart,      // (productId) => void
  updateQuantity,      // (productId, qty) => void
  clearCart,           // () => void
  getTotalPrice        // () => number
} = useCart()
```

## Common Tasks

### Add Product to Cart
```javascript
const { addToCart } = useCart()
addToCart(productObject)
```

### Get Cart Total
```javascript
const { getTotalPrice } = useCart()
const total = getTotalPrice()
```

### Clear Cart
```javascript
const { clearCart } = useCart()
clearCart()
```

### Get All Cart Items
```javascript
const { cartItems } = useCart()
cartItems.forEach(item => console.log(item))
```

## Styling Classes

### Colors
```css
Primary Purple: #667eea
Dark Purple: #764ba2
Success Green: #28a745
Danger Red: #ff6b6b
Dark Gray: #2c3e50
Light Gray: #f8f9fa
```

### Responsive Breakpoints
```css
Desktop: 1024px+
Tablet: 768px - 1023px
Mobile: 480px - 767px
Small: < 480px
```

## Products Available

**Electronics** (7 items)
- Wireless Headphones ($79.99) ⭐4.5
- USB-C Charger ($29.99) ⭐4.8
- Laptop Stand ($49.99) ⭐4.6
- Portable SSD ($129.99) ⭐4.7
- Keyboard ($69.99) ⭐4.5
- USB Hub ($39.99) ⭐4.6
- Wireless Mouse ($34.99) ⭐4.4

**Accessories** (5 items)
- Smartphone Case ($19.99) ⭐4.3
- Screen Protector ($9.99) ⭐4.4
- Mouse Pad ($14.99) ⭐4.2
- Cable Organizer ($12.99) ⭐4.1
- Monitor Stand ($44.99) ⭐4.5

## Keyboard Shortcuts

| Action | How |
|--------|-----|
| Home | Click logo or "Home" link |
| Browse Products | Click "Products" or "Shop Now" |
| View Cart | Click "Cart" in navigation |
| Filter Products | Use sidebar filters |
| Sort Products | Use toolbar dropdown |
| Add to Cart | Click "Add to Cart" button |
| Clear Cart | Click "Clear Cart" button |

## Troubleshooting Quick Tips

| Issue | Solution |
|-------|----------|
| Port already in use | Vite uses next available port |
| Dependencies missing | Run `npm install` |
| Styles not loading | Check CSS import paths |
| Cart not updating | Ensure CartProvider wraps app |
| Filters not working | Check useState hooks in Products.jsx |

## Performance Tips

✓ Filters use `useMemo` - optimized
✓ CSS Grid/Flexbox - efficient layout
✓ Context API - minimal re-renders
✓ Responsive images - placeholder URLs
✓ Lazy loading ready - can be added

## Browser Support

✓ Chrome/Chromium
✓ Firefox
✓ Safari
✓ Edge
✓ Mobile browsers

## Mobile Optimization

✓ Responsive grid layouts
✓ Touch-friendly buttons
✓ Collapsible filters
✓ Mobile navbar
✓ Stack layouts on small screens

## Next Steps to Extend

1. Add product detail page
2. Implement checkout
3. Add user authentication
4. Integrate payment gateway
5. Add search functionality
6. Implement product reviews
7. Add wishlist feature
8. Persist cart to localStorage

---

**Last Updated**: November 2025
**Project**: MiniCart E-Commerce
**React Version**: 19.2.0
**Router Version**: 6.30.2
