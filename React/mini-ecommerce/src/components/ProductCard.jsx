import { useContext } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'
import { Context } from '../context/CommonContext'

export const ProductCard = ({ product, onViewDetails }) => {

  const { addToCart } = useContext(Context);


  // const { addToCart } = useCart()

  // const handleAddToCart = (e) => {
  //   e.preventDefault()
  //   addToCart(product)
  //   alert(`${product.name} added to cart!`)
  // }

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
        <span className="rating-value">({rating})</span>
      </div>
    )
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        {renderStars(product.rating)}
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button onClick={() => addToCart(product)} className="btn-add-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
