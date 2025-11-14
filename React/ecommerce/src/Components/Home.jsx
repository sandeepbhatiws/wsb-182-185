import React, { useEffect, useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import ProductCard from './ProductCard';
import axios from 'axios';

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get(`https://dummyjson.com/products?limit=12`)
      .then((result) => {
        setProducts(result.data.products)
      })
      .catch(() => {

      })
  },[]);

  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row text-center p-4'>
            <h1>Product Listings</h1>
          </div>
          <div className='row row-gap-3'>
            {
              products.map((value, index) => {
                return(
                  <ProductCard key={ index } product={value}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
