import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/CommonContext'

export const Cart = () => {
  const { cartItems, updateCart, removeCart, clearCart} = useContext(Context);
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    var sum = 0;

    cartItems.forEach((v) => {
      sum += v.price * v.quantity
    })

    setTotalAmount(sum);
  },[cartItems]);

  

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart!</p>
            <Link to="/products" className="btn-continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart ({cartItems.length} items)</h1>

        <div className="cart-content">
          <main className="cart-items-section">
            <div className="cart-items-header">
              <span className="col-product">Product</span>
              <span className="col-price">Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-subtotal">Subtotal</span>
              <span className="col-action">Action</span>
            </div>

            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} />
                  <div className="product-details">
                    <h3>{item.name}</h3>
                  </div>
                </div>

                <div className="item-price">
                  ${item.price}
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateCart(item.id, 'minus')}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="qty-input"
                    disabled
                  />
                  <button
                    onClick={() => updateCart(item.id, 'plus')}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="item-action">
                  <button
                    onClick={() => removeCart(item.id)}
                    className="btn-remove"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-actions">
              <Link to="/products" className="btn-continue">
                Continue Shopping
              </Link>
              <button onClick={clearCart} className="btn-clear">
                Clear Cart
              </button>
            </div>
          </main>

          <aside className="cart-summary-section">
            <div className="order-summary">
              <h2>Order Summary</h2>

              {/* <div className="summary-row">
                <span>Subtotal</span>
                <span className="amount">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax (10%)</span>
                <span className="amount">${tax.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span className="amount">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {totalPrice <= 50 && (
                <div className="free-shipping-info">
                  Free shipping on orders over $50!
                  <br />
                  Add ${(50 - totalPrice).toFixed(2)} more.
                </div>
              )} */}

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span className="amount">${totalAmount.toFixed(2)}</span>
              </div>

              <button className="btn-checkout">
                Proceed to Checkout
              </button>

              <div className="secure-badge">
                🔒 Secure checkout
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
