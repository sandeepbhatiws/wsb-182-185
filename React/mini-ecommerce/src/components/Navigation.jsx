import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navigation.css'
import { useContext } from 'react'
import { Context } from '../context/CommonContext'

export const Navigation = () => {

  const { isLogin, cartItems } = useContext(Context);

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
              {
                cartItems.length > 0
                ?
                <span className="cart-badge">{cartItems.length}</span>
                :
                ''
              }
              
            </Link>
          </li>

          {
            isLogin == 1
            ?
            <li>
              <Link className="nav-link">Logout</Link>
            </li>
            :
            <>
              <li>
                <Link className="nav-link">Login</Link>
              </li>

              <li>
                <Link className="nav-link">Register</Link>
              </li>
            </>
          }

        </ul>
      </div>
    </nav>
  )
}
