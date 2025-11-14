import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Logo from "../../assets/images/wscube-tech-logo-2.svg"
import axios from 'axios';

export default function Header() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then((result) => {
      setCategories(result.data);
    })
  },[]);

  return (
    <>
      <div className='shadow  container-fluid position-sticky top-0 z-1 bg-white'>
        <div className='container'>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                <img src={Logo}/>
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {
                    categories.map((v,i) => {
                      return(
                          (i <= 6)
                          ?
                          
                            <li class="nav-item" key={i}>
                              <Link class="nav-link" to={ `/products/${ v.slug  }` }>{ v.name }</Link>
                            </li>
                          
                          :
                          ''
                      )
                    })
                  }
                </ul>
                <span class="navbar-text">
                  Navbar text with an inline element
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
