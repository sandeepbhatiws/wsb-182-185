import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Rootlayout from './Components/Rootlayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductListing from './Components/ProductListing'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
          <Route element={<Rootlayout/>}>
              <Route path='/' element={ <Home/> }/>
              <Route path='about-us' element={ <AboutUs/> } />
              <Route path='products/:category?' element={ <ProductListing/> } />
          </Route>

          <Route path='gallery' element={ <AboutUs/> } />


          <Route path='admin-panel'>
            <Route path='category'>
              <Route path='add' element={ <AboutUs/> } />
              <Route path='view' element={ <AboutUs/> } />
            </Route>

            <Route path='color'>
              <Route path='add' element={ <AboutUs/> } />
              <Route path='view' element={ <AboutUs/> } />
            </Route>
          </Route>
        
      </Routes>
    </BrowserRouter>
  </>,
)
