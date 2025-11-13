import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

export default function Home() {

  const [products, setProducts] = useState([]);
  var [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    var data = (currentPage - 1) * 12;
    setSkip(data);
  }, [currentPage]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}`)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch(() => {

      })
  }, [skip]);

  const previous = () => {
    if (currentPage > 1) {
      currentPage--;
      setCurrentPage(currentPage)
    }
  }

  const next = () => {
    currentPage++;
    setCurrentPage(currentPage)
  }

  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h1>Product Listings</h1>
        </div>

        <div className='product_listings'>
          {
            products.map((item, index) => {
              return (
                <ProductCard key={index} data={item} />
              )
            })
          }

          <button onClick={previous}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </>
  )
}
