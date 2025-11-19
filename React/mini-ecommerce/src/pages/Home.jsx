import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import './Home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Home = () => {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=8`)
    .then((result) => {
      setFeaturedProducts(result.data.data)
    })
    .catch(() => {
        toast.error('Something went wrong !');
    })
  },[])

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MiniCart</h1>
          <p>Discover amazing tech products at unbeatable prices</p>
          <Link to="/products" className="btn-shop-now">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="container">
        <section className="featured-section">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h3>Fast Shipping</h3>
            <p>Free shipping on orders over $50</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure Payment</h3>
            <p>100% secure transactions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">↩️</span>
            <h3>Easy Returns</h3>
            <p>30-day money-back guarantee</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💬</span>
            <h3>24/7 Support</h3>
            <p>Expert customer support</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Shop All Products</h2>
          <p>Browse our complete collection of tech accessories and electronics</p>
          <Link to="/products" className="btn-secondary">
            View All Products
          </Link>
        </section>
      </div>
    </div>
  )
}
