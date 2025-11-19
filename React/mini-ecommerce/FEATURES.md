# MiniCart - Mini E-Commerce Application

A modern, responsive React e-commerce application with product listing, filtering, sorting, and shopping cart functionality.

## Features

### 1. **Home Page**
- Hero section with call-to-action
- Featured products showcase (6 products)
- Feature highlights (Fast Shipping, Secure Payment, Easy Returns, 24/7 Support)
- Call-to-action button to browse all products
- Responsive design

### 2. **Product Listing Page**
- **Grid Display**: Responsive product grid with hover effects
- **Filtering Options**:
  - Category filter
  - Brand filter
  - Price range filter (0-$200)
  - Rating filter (All, 3★+, 4★+, 4.5★+)
- **Sorting Options**:
  - Name (A-Z)
  - Price (Low to High)
  - Price (High to Low)
  - Rating (Highest First)
- Mobile-friendly filter toggle
- Real-time filter updates

### 3. **Shopping Cart**
- View all cart items with images and details
- Adjust quantities with +/- buttons or direct input
- Remove items from cart
- Order summary with:
  - Subtotal calculation
  - Tax calculation (10%)
  - Shipping calculation ($10 or free over $50)
  - Grand total
- Free shipping incentive message
- Empty cart state with suggestions
- Continue shopping option
- Responsive design for all devices

## Technology Stack

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 6.30.2
- **Styling**: CSS3 with responsive design
- **Build Tool**: Vite
- **State Management**: React Context API

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation bar with cart badge
│   ├── Navigation.css
│   ├── ProductCard.jsx     # Reusable product card component
│   └── ProductCard.css
├── context/
│   └── CartContext.jsx     # Cart state management
├── pages/
│   ├── Home.jsx           # Home page with featured products
│   ├── Home.css
│   ├── Products.jsx       # Products listing with filters & sorting
│   ├── Products.css
│   ├── Cart.jsx           # Shopping cart page
│   └── Cart.css
├── data/
│   └── products.js        # Mock product data & constants
├── App.jsx                # Main app with routing
├── App.css
└── main.jsx              # Entry point
```

## Installation

1. **Navigate to project directory**:
   ```bash
   cd mini-ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Usage

### Navigation
- **Home**: Click on the MiniCart logo or Home link
- **Products**: Browse all products with filtering and sorting
- **Cart**: View and manage shopping cart items

### Filtering Products
1. Go to Products page
2. Use sidebar filters:
   - Select categories
   - Select brands
   - Adjust price range slider
   - Choose minimum rating
3. Results update in real-time

### Sorting Products
1. Use the "Sort by" dropdown in the products toolbar
2. Choose from: Name, Price (Low-High), Price (High-Low), or Rating

### Adding to Cart
1. Click "Add to Cart" button on any product card
2. See the cart badge count update in the navigation
3. Go to Cart page to view and manage items

### Managing Cart
1. Adjust quantities with +/- buttons or direct input
2. Remove items with the Remove button
3. View order summary with tax and shipping
4. Clear entire cart if needed

## Features Highlights

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **State Persistence**: Cart state is managed with React Context API
- **Real-time Updates**: Filter and sort operations update instantly
- **User-Friendly**: Intuitive interface with helpful feedback
- **Performance**: Optimized with useMemo for filter/sort operations
- **Accessibility**: Semantic HTML and keyboard-friendly controls

## Mock Data

The application comes with 12 pre-loaded products across 2 categories (Electronics, Accessories) with various brands and price ranges.

## Future Enhancements

- Product detail page
- User authentication
- Checkout & payment integration
- Order history
- Product reviews & ratings
- Wishlist functionality
- Local storage persistence
- Search functionality
- Product recommendations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for learning and development purposes.
