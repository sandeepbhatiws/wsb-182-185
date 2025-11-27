import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Header from './Components/Common/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import RootLayout from './Components/RootLayout'
import Productlisting from './Components/Productlisting'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Productlisting/>}/>
           <Route path='/product-details/:id' element={<ProductDetails/>}/>
           <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>,
)
