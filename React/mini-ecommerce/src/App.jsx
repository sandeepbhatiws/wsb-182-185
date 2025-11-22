import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import './App.css'
import { ToastContainer } from 'react-toastify'
import ProductDetails from './components/ProductDetails'
import CommonContext from './context/CommonContext'

function App() {
  return (
    <CartProvider>
      <CommonContext>
        <ToastContainer/>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </CommonContext>
    </CartProvider>
  )
}

export default App
