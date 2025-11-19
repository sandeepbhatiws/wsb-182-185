# Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- react@^19.2.0
- react-dom@^19.2.0
- react-router-dom@^6.30.2

### Step 2: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

## Features Ready to Use

### ✅ Home Page (/)
- Hero banner with featured products
- 6 featured products showcase
- Feature highlights section
- Navigation to products page

### ✅ Products Page (/products)
**Filters:**
- Category (Electronics, Accessories)
- Brand (AudioTech, PowerUp, CaseShield, etc.)
- Price Range ($0 - $200 with slider)
- Rating (All, 3★+, 4★+, 4.5★+)

**Sorting:**
- Name (A-Z)
- Price (Low to High)
- Price (High to Low)
- Rating (Highest First)

**Display:**
- Responsive grid layout
- Mobile-friendly filter toggle
- Real-time filter updates
- Product count indicator

### ✅ Cart Page (/cart)
- View all cart items
- Adjust quantities
- Remove items
- Order summary with:
  - Subtotal
  - Tax (10%)
  - Shipping ($0 if over $50, $10 otherwise)
  - Grand total
- Empty cart state
- Continue shopping button

### ✅ Navigation
- Sticky header with branding
- Active navigation links
- Cart badge showing item count

## Project File Structure

```
mini-ecommerce/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── ProductCard.jsx
│   │   └── *.css
│   ├── context/
│   │   └── CartContext.jsx  # Cart state management
│   ├── data/
│   │   └── products.js      # Mock product data
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   └── *.css
│   ├── App.jsx              # Main app with routing
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Sample Product Data

The app includes 12 pre-loaded products:
- **Electronics**: Headphones, Chargers, Keyboards, SSDs, USB Hubs, Monitors Stands
- **Accessories**: Phone Cases, Screen Protectors, Mouse Pads, Cable Organizers

Each product has:
- Name, price, brand
- 5-star rating
- Category
- Description
- Placeholder image

## Customization

### Add New Products
Edit `src/data/products.js`:
```javascript
export const products = [
  {
    id: 13,
    name: 'Your Product',
    price: 99.99,
    category: 'Your Category',
    brand: 'Your Brand',
    rating: 4.5,
    image: 'https://your-image-url',
    description: 'Product description'
  },
  // ... more products
]
```

### Modify Styling
- Component styles: `src/components/*.css`
- Page styles: `src/pages/*.css`
- Global styles: `src/App.css`

### Update Navigation Links
Edit `src/components/Navigation.jsx` to add more routes

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Components Not Displaying
- Check React Router setup in `App.jsx`
- Ensure CartProvider wraps entire app
- Verify import paths are correct

## Browser DevTools

### View Cart State
Open browser console and check:
```javascript
// In any component:
const { cartItems } = useCart()
console.log(cartItems)
```

## Performance Tips

- Filters use `useMemo` for optimization
- Products grid uses CSS Grid for responsive layout
- Lazy loading for images (can be added)
- Code splitting with React Router

## Next Steps

1. ✅ Explore the Home page
2. ✅ Browse and filter products
3. ✅ Add items to cart
4. ✅ View cart and manage quantities
5. 🔄 Add payment integration
6. 🔄 Implement product detail page
7. 🔄 Add user authentication

## Support

For issues or questions:
1. Check the console for error messages
2. Verify all files are created correctly
3. Ensure dependencies are installed
4. Clear browser cache and hard reload

---

**Happy shopping! 🛒**
