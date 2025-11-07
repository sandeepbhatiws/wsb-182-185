import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import Header from './Header'
import './assets/css/style.css'
import Gallery from './Gallery'
import Counter from './Counter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}

    {/* <Gallery/> */}

    <Counter/>


  </StrictMode>,
)
