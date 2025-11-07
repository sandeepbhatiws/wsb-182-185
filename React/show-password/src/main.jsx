import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Password from './Password'
import ListData from './ListData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Password/> */}


    <ListData/>
  </StrictMode>,
)
