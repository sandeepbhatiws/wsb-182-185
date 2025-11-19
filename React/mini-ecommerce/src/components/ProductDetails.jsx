import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import './ProductDetails.css';

export default function ProductDetails() {

    const params = useParams();
    const [productDetails, setProductDetails] = useState('');
    const [singleImage, setSingleImage] = useState('');
    const [multipleImages, setMultipleImages] = useState([]);

    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${params.id}`)
        .then((result) => {
            setProductDetails(result.data.product)
            setSingleImage(result.data.product.multiple_images[0])
            setMultipleImages(result.data.product.multiple_images)
        })
        .catch(() => {
            toast.error('Something went wrong !!');
        })
    },[params])

  return (
    <div className="product-details-container">
      <div className="product-details-wrapper">
        {/* Image Gallery Section */}
        <div className="gallery-section">
          {/* Main Image */}
          <div className="main-image-container">
            {singleImage && (
              <img src={singleImage} alt={productDetails.name} className="main-image" />
            )}
            {productDetails.discount && (
              <div className="discount-badge">{productDetails.discount}% OFF</div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="thumbnails-container">
            {multipleImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${singleImage === image ? 'active' : ''}`}
                onMouseOver={() => setSingleImage(image)}
              >
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="info-section">
          {/* Product Header */}
          <div className="product-header">
            <div className="badges">
              {productDetails.brand && (
                <span className="badge badge-brand">{productDetails.brand}</span>
              )}
              {productDetails.category && (
                <span className="badge badge-category">{productDetails.category}</span>
              )}
            </div>
            <h1 className="product-title">{productDetails.name}</h1>
          </div>

          {/* Rating & Reviews */}
          <div className="rating-section">
            <div className="stars">
              {Array(5).fill().map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < Math.floor(productDetails.rating || 0) ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-text">
              {productDetails.rating || 0} ({productDetails.reviews || 0} reviews)
            </span>
          </div>

          {/* Description */}
          {productDetails.description && (
            <p className="description">{productDetails.description}</p>
          )}

          {/* Pricing Section */}
          <div className="pricing-section">
            <div className="price-display">
              <span className="current-price">
                ${(productDetails.price * (1 - (productDetails.discount || 0) / 100)).toFixed(2)}
              </span>
              {productDetails.discount > 0 && (
                <>
                  <span className="original-price">${productDetails.price.toFixed(2)}</span>
                  <span className="savings">
                    Save ${(productDetails.price * (productDetails.discount / 100)).toFixed(2)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div className="stock-section">
            {productDetails.stock > 0 ? (
              <div className="in-stock">
                <span className="status-indicator in-stock-indicator"></span>
                <span className="status-text">In Stock ({productDetails.stock} available)</span>
              </div>
            ) : (
              <div className="out-of-stock">
                <span className="status-indicator out-of-stock-indicator"></span>
                <span className="status-text">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Purchase Section */}
          <div className="purchase-section">
            <div className="quantity-control">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-input-group">
                <button
                  className="qty-btn"
                  onClick={() => setSingleImage(multipleImages[0])}
                  disabled={productDetails.stock === 0}
                >
                  −
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={productDetails.stock}
                  defaultValue="1"
                  disabled={productDetails.stock === 0}
                />
                <button
                  className="qty-btn"
                  onClick={() => setSingleImage(multipleImages[0])}
                  disabled={productDetails.stock === 0}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="add-to-cart-btn"
              disabled={productDetails.stock === 0}
            >
              {productDetails.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Product Features */}
          {productDetails.features && (
            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {Array.isArray(productDetails.features) ? (
                  productDetails.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))
                ) : (
                  <li>{productDetails.features}</li>
                )}
              </ul>
            </div>
          )}

          {/* Shipping & Returns Info */}
          <div className="shipping-returns">
            <div className="info-card">
              <span className="info-icon">🚚</span>
              <div>
                <h4>Free Shipping</h4>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">↩️</span>
              <div>
                <h4>Easy Returns</h4>
                <p>30-day return policy</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🔒</span>
              <div>
                <h4>Secure Payment</h4>
                <p>100% protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
