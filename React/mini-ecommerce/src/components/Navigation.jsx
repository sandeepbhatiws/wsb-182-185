import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navigation.css'

export const Navigation = () => {
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛒 MiniCart
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
