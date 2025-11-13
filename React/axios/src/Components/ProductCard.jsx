import React from 'react'

export default function ProductCard( { data } ) {

  return (
    <>
      <div className='products'>
        <div className='product_image'>
            <img src={data.thumbnail}/>
        </div>
        <div className='product_content'>
            <h2>{ data.title }</h2>
            <p>{ data.description }</p>
        </div>
    </div>
    </>
  )
}
