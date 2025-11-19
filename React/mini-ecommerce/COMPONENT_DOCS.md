# Component Documentation

## Table of Contents
1. [App Component](#app-component)
2. [Navigation Component](#navigation-component)
3. [ProductCard Component](#productcard-component)
4. [Pages](#pages)
   - [Home Page](#home-page)
   - [Products Page](#products-page)
   - [Cart Page](#cart-page)
5. [Context](#context)
   - [Cart Context](#cart-context)
6. [Data](#data)

---

## App Component

**File**: `src/App.jsx`

Main application component that sets up routing and cart state management.

### Features:
- React Router setup with BrowserRouter
- CartProvider wrapper for global cart state
- Three main routes: Home, Products, Cart
- Navigation component sticky header

### Usage:
```jsx
import App from './App'
// App automatically sets up routing and context
```

---

## Navigation Component

**File**: `src/components/Navigation.jsx`

Sticky navigation bar with branding and cart badge.

### Props:
None (uses `useCart` hook for cart count)

### Features:
- Logo/brand link to home
- Navigation links (Home, Products, Cart)
- Cart badge showing total quantity
- Responsive design
- Sticky positioning

### Usage:
```jsx
// Automatically rendered in App.jsx
<Navigation />
```

### Styling:
- Gradient background (purple)
- Smooth hover effects
- Mobile responsive (changes at 768px and 480px)

---

## ProductCard Component

**File**: `src/components/ProductCard.jsx`

Reusable card component for displaying products.

### Props:
```javascript
{
  product: {
    id: number,
    name: string,
    price: number,
    category: string,
    brand: string,
    rating: number (0-5),
    image: string (URL),
    description: string
  },
  onViewDetails?: function (optional)
}
```

### Features:
- Product image with hover effect
- Brand name, product name, description
- Star rating display (1-5 stars)
- Price display
- Add to Cart button
- Toast notification on add

### Usage:
```jsx
import { ProductCard } from './components/ProductCard'

<ProductCard product={productObject} onViewDetails={handleView} />
```

### Dependencies:
- `useCart` hook from CartContext
- ProductCard.css

---

## Pages

### Home Page

**File**: `src/pages/Home.jsx`

Landing page with hero section and featured products.

#### Sections:

1. **Hero Section**
   - Large background gradient
   - Headline: "Welcome to MiniCart"
   - Tagline
   - Shop Now CTA button

2. **Featured Products Section**
   - Displays first 6 products
   - Responsive grid layout
   - ProductCard components

3. **Features Section**
   - 4 feature cards:
     - 🚚 Fast Shipping
     - 🔒 Secure Payment
     - ↩️ Easy Returns
     - 💬 24/7 Support

4. **CTA Section**
   - Call to action to browse all products
   - Link to products page

#### Styling:
- Home.css with responsive design
- Mobile breakpoints: 768px and 480px
- Grid layout for products and features

---

### Products Page

**File**: `src/pages/Products.jsx`

Main products listing with advanced filtering and sorting.

#### Features:

##### Filters (Sidebar):
1. **Category Filter**
   - Checkbox multi-select
   - From products data
   - Real-time updates

2. **Brand Filter**
   - Checkbox multi-select
   - From products data
   - Real-time updates

3. **Price Range Filter**
   - Dual slider (min/max)
   - Range: $0-$200
   - Real-time updates

4. **Rating Filter**
   - Radio button select
   - Options: All, 3★+, 4★+, 4.5★+
   - Real-time updates

##### Toolbar:
- **Results Info**: Shows filtered product count
- **Sort Dropdown**:
  - Name (A-Z)
  - Price (Low to High)
  - Price (High to Low)
  - Rating (Highest First)

##### Layout:
- Two-column layout (sidebar + main)
- Mobile: Stack with toggle button
- Responsive grid for products
- Sticky sidebar on desktop

#### State Management:
```javascript
const [selectedCategories, setSelectedCategories] = useState([])
const [selectedBrands, setSelectedBrands] = useState([])
const [priceRange, setPriceRange] = useState({ min: 0, max: 200 })
const [minRating, setMinRating] = useState(0)
const [sortBy, setSortBy] = useState('name')
const [showFilters, setShowFilters] = useState(true)
```

#### Optimization:
- `useMemo` for filtering and sorting
- Prevents unnecessary re-renders
- Efficient product updates

#### Functions:
- `toggleCategory(category)`: Toggle category filter
- `toggleBrand(brand)`: Toggle brand filter
- `resetFilters()`: Clear all filters
- `filteredAndSortedProducts`: Memoized computed products

---

### Cart Page

**File**: `src/pages/Cart.jsx`

Shopping cart with order management and summary.

#### Sections:

##### Empty State:
- Large icon (🛒)
- "Your cart is empty" message
- Continue shopping button

##### Cart Items Table:
Columns:
- Product (image, name, brand)
- Price per unit
- Quantity (with +/- buttons)
- Subtotal
- Remove button

##### Cart Actions:
- Continue Shopping button
- Clear Cart button

##### Order Summary (Sticky):
- Subtotal
- Tax (10%)
- Shipping (Free over $50 or $10)
- **Total (Grand Total)**
- Free Shipping incentive message
- Proceed to Checkout button
- 🔒 Secure checkout badge

#### Features:
- Quantity adjustment with buttons or direct input
- Real-time calculations
- Responsive table layout
- Mobile optimized (stacks on small screens)
- Empty cart detection

#### Functions Used:
- `removeFromCart(id)`: Remove item
- `updateQuantity(id, qty)`: Update item quantity
- `clearCart()`: Clear entire cart
- `getTotalPrice()`: Calculate subtotal

#### Calculations:
```javascript
totalPrice = sum of (price × quantity) for all items
tax = totalPrice × 0.1
shipping = totalPrice > 50 ? 0 : 10
grandTotal = totalPrice + tax + shipping
```

---

## Context

### Cart Context

**File**: `src/context/CartContext.jsx`

Global state management for shopping cart using React Context API.

#### Provider:
```jsx
<CartProvider>
  {/* App content */}
</CartProvider>
```

#### Hook:
```javascript
const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()
```

#### State:
```javascript
cartItems: Array<{
  id: number,
  name: string,
  price: number,
  quantity: number,
  ...product
}>
```

#### Methods:

1. **addToCart(product)**
   - Adds product to cart
   - If exists: increments quantity
   - If new: adds with quantity 1

2. **removeFromCart(productId)**
   - Removes item from cart completely

3. **updateQuantity(productId, quantity)**
   - Updates item quantity
   - If quantity ≤ 0: removes item

4. **clearCart()**
   - Empties the entire cart

5. **getTotalPrice()**
   - Returns sum of all item prices × quantities

#### Error Handling:
- Throws error if `useCart()` used outside CartProvider

---

## Data

### Products Data

**File**: `src/data/products.js`

Mock product data and configuration.

#### Exported:
1. **products**: Array of 12 product objects
2. **brands**: Unique brands from products
3. **categories**: Unique categories from products
4. **priceRanges**: Predefined price range options

#### Product Schema:
```javascript
{
  id: number (1-12),
  name: string,
  price: number,
  category: string ('Electronics' | 'Accessories'),
  brand: string,
  rating: number (4.1-4.8),
  image: string (placeholder URL),
  description: string
}
```

#### Sample Product:
```javascript
{
  id: 1,
  name: 'Wireless Headphones',
  price: 79.99,
  category: 'Electronics',
  brand: 'AudioTech',
  rating: 4.5,
  image: 'https://via.placeholder.com/300x300?text=Wireless+Headphones',
  description: 'High-quality wireless headphones with noise cancellation'
}
```

#### Available Brands:
- AudioTech
- PowerUp
- CaseShield
- WorkSpace
- ProtectIt
- StoragePro
- KeyMaster
- PrecisionPad
- ConnectHub
- OrganizeIt
- PointMaster
- ViewRise

#### Available Categories:
- Electronics
- Accessories

---

## Styling

### CSS Files Structure:

1. **App.css** - Global styles
2. **Navigation.css** - Navigation bar styling
3. **ProductCard.css** - Product card styling
4. **Home.css** - Home page styling
5. **Products.css** - Products page & filters styling
6. **Cart.css** - Cart page styling

### Color Scheme:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Success: `#28a745` (Green)
- Danger: `#ff6b6b` (Red)
- Dark: `#2c3e50` (Dark Gray)
- Light: `#f8f9fa` (Light Gray)

### Responsive Breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: < 480px

---

## Hooks Used

### React Hooks:
- `useState`: Component state management
- `useContext`: Access cart context
- `useMemo`: Memoize computed products (products page)

### Custom Hooks:
- `useCart()`: Cart context hook

---

## How to Extend

### Add a New Product:
Edit `src/data/products.js`:
```javascript
export const products = [
  // ... existing products
  {
    id: 13,
    name: 'New Product',
    price: 99.99,
    category: 'Electronics',
    brand: 'NewBrand',
    rating: 4.5,
    image: 'url',
    description: 'Description'
  }
]
```

### Add a New Page:
1. Create `src/pages/NewPage.jsx`
2. Create `src/pages/NewPage.css`
3. Add route in `src/App.jsx`:
```jsx
<Route path="/newpage" element={<NewPage />} />
```
4. Add link in `Navigation.jsx`

### Add a New Filter:
In `src/pages/Products.jsx`:
1. Add state for new filter
2. Create filter UI in sidebar
3. Update filter logic in `useMemo`

---

## Performance Considerations

1. **Products Page**:
   - Uses `useMemo` to prevent unnecessary computations
   - Filters and sorts only when dependencies change

2. **Navigation**:
   - Cart count updates efficiently with Context
   - No unnecessary re-renders of other components

3. **Styling**:
   - CSS Grid and Flexbox for efficient layouts
   - Minimal CSS transitions for performance

4. **Image Loading**:
   - Uses placeholder images (can be replaced)
   - Images are referenced by URL

---

## Future Enhancement Ideas

1. **Product Detail Page**
   - Route: `/product/:id`
   - Full product information
   - Related products

2. **Checkout Page**
   - Shipping address form
   - Payment integration
   - Order confirmation

3. **User Accounts**
   - Sign up / Login
   - Order history
   - Saved addresses
   - Wishlist

4. **Search**
   - Full-text search
   - Search suggestions
   - Search history

5. **Advanced Features**
   - Product reviews
   - Ratings system
   - Recommendations
   - Inventory management
   - Discount codes

---

**Last Updated**: November 2025
**Version**: 1.0
