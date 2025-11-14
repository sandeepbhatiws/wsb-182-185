import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from './ProductCard';

export default function ProductListing() {

    const params = useParams();

    console.log(params.category);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${params.category}`)
        .then((result) => {
            setProducts(result.data.products)
        })
        .catch(() => {

        })
    },[params]);

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
